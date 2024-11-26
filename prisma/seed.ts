import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criação de uma instituição
  const institution = await prisma.institution.create({
    data: {
      name: 'Tech Solutions',
      description: 'Empresa focada em soluções tecnológicas.',
      balance: 50000,
    },
  });

  // Criação de usuários
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@techsolutions.com',
      role: 'ADMIN',
      institutionId: institution.id,
    },
  });

  const regularUser = await prisma.user.create({
    data: {
      name: 'Regular User',
      email: 'user@techsolutions.com',
      institutionId: institution.id,
    },
  });

  // Criação de clientes
  const client1 = await prisma.client.create({
    data: {
      name: 'John Doe',
      phoneNumber: '+123456789',
      gender: 'Male',
      email: 'johndoe@example.com',
      birthday: new Date('1990-01-01'),
    },
  });

  const client2 = await prisma.client.create({
    data: {
      name: 'Jane Smith',
      phoneNumber: '+987654321',
      gender: 'Female',
      email: 'janesmith@example.com',
      birthday: new Date('1995-05-15'),
    },
  });

  // Criação de grupos
  const group = await prisma.group.create({
    data: {
      name: 'Premium Clients',
      description: 'Grupo exclusivo para clientes premium.',
      institutionId: institution.id,
      userId: adminUser.id,
      clients: {
        connect: [{ id: client1.id }, { id: client2.id }],
      },
    },
  });

  // Criação de templates de mensagens
  const messageTemplate = await prisma.messageTemplate.create({
    data: {
      title: 'Boas-vindas',
      content: 'Olá, {{name}}! Seja bem-vindo(a) à nossa plataforma!',
      institutionId: institution.id,
      userId: adminUser.id
    },
  });

  // Criação de mensagens
  await prisma.message.create({
    data: {
      content: 'Bem-vindo ao Tech Solutions!',
      clientId: client1.id,
      status: 'SENT',
      institutionId: institution.id,
      messageTemplateId: messageTemplate.id,
      userId: regularUser.id,
      sentAt: new Date(),
    },
  });

  await prisma.message.create({
    data: {
      content: 'Obrigado por se juntar ao nosso grupo premium!',
      groupId: group.id,
      status: 'SENT',
      institutionId: institution.id,
      userId: adminUser.id,
      sentAt: new Date(),
    },
  });

  console.log('Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
