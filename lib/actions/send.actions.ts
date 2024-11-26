"use server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();
export async function sendMessageTemplateByGroups(formData: FormData) {
  const session = await auth();
  const sessionEmail = session?.user?.email;
  const group = String(formData.get("group"));
  const template = await prisma.messageTemplate.findFirst({
    where: {
      id: String(formData.get("template")),
    },
  });
  if (!sessionEmail) {
    throw new Error("Invalid Email");
  }
  const user = await prisma.user.findFirst({
    where: {
      email: sessionEmail,
    },
  });

  if (!user || !template) {
    throw new Error("User not found");
  }

  const clients = await prisma.client.findMany({
    where: {
      groups: {
        every: {
          id: group,
        },
      },
    },
  });
  for (const client of clients) {
    const formatedContent = template.content.replace("[Nome]", client.name);
    await prisma.message.create({
      data: {
        content: formatedContent,
        clientId: client.id,
        status: "PENDING",
        institutionId: user.institutionId,
        userId: user.id,
        messageTemplateId: template.id,
        groupId: group,
      },
    });
  }
  return redirect("/admin");
}

export async function sendMessageTemplate(formData: FormData) {
  const session = await auth();
  const sessionEmail = session?.user?.email;
  const clients = String(formData.get("contacts")).split(",");
  const template = await prisma.messageTemplate.findFirst({
    where: {
      id: String(formData.get("template")),
    },
  });
  if (!sessionEmail) {
    throw new Error("Invalid Email");
  }
  const user = await prisma.user.findFirst({
    where: {
      email: sessionEmail,
    },
  });

  if (!user || !template) {
    throw new Error("User not found");
  }
  for (const clientId of clients) {
    const client = await prisma.client.findFirst({
      where: {
        id: clientId,
      },
    });
    if (!client) {
      throw new Error("Client not found");
    }
    const message = await prisma.message.create({
      data: {
        content: template.content.replace("[Nome]", client.name),
        clientId: client.id,
        status: "PENDING",
        institutionId: user.institutionId,
        userId: user.id,
        sentAt: new Date(),
        messageTemplateId: template.id,
      },
    });
    console.log(message);
  }
}

export async function sendMessageByGroups(formData: FormData) {
  const session = await auth();
  const sessionEmail = session?.user?.email;
  const group = String(formData.get("group"));
  const messageContent = String(formData.get("message"));
  if (!sessionEmail) {
    throw new Error("Invalid Email");
  }
  const user = await prisma.user.findFirst({
    where: {
      email: sessionEmail,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const clients = await prisma.client.findMany({
    where: {
      groups: {
        every: {
          id: group,
        },
      },
    },
  });
  for (const client of clients) {
    const message = await prisma.message.create({
      data: {
        content: messageContent,
        clientId: client.id,
        status: "PENDING",
        institutionId: user.institutionId,
        userId: user.id,
        groupId: group,
      },
    });
    console.log(message);
  }
}

export async function sendMessage(formData: FormData) {
  const session = await auth();
  const sessionEmail = session?.user?.email;
  if (!sessionEmail) {
    throw new Error("Invalid Email");
  }
  const messageContent = String(formData.get("message"));
  const clients = String(formData.get("contacts")).split(",");
  const user = await prisma.user.findFirst({
    where: {
      email: sessionEmail,
    },
    include: {
      institution: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  for (const clientId of clients) {
    if (!clientId.trim()) continue;
    await prisma.message.create({
      data: {
        content: messageContent,
        clientId: clientId,
        status: "PENDING",
        institutionId: user.institutionId,
        userId: user.id,
        sentAt: new Date(),
      },
    });
    await prisma.institution.update({
      where: {
        id: user.institutionId,
      },
      data: {
        balance: Number(user.institution.balance - 1),
      },
    });
    console.log(Number(user.institution.balance - 1));
  }
}

export async function testApi(formData: FormData) {
  const messageContent = String(formData.get("message"));
  const number = String(formData.get("number"));
  const url =
    "http://52.30.114.86:8080/mimosms/v1/message/send?token=6b9d9fe91fa636cba93365a174752940927264476";
  const data = {
    sender: "ProEvo",
    recipients: number,
    text: messageContent,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Resposta da API:", data);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}
