import {saltAndHashPassword, verifyPassword} from "@/lib/utils"

async function main(){
    const hashedPassword = await saltAndHashPassword('12345678')
    const isMatch = await verifyPassword('12345678', '$2a$10$5rNuoSoiCq82Y535CTW/XOqBJ63JfO4InLd.xt07GYxMENVsdzWHq');
    console.log(isMatch)

    
      if (isMatch) {
        console.log("Senha válida!");
      } else {
        console.log("Senha inválida!");
      }
}

main()