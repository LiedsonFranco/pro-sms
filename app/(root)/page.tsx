import { MobileNavbar, Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    < >
      <Navbar />
      <MobileNavbar />
      <main>
        <svg className='hidden'>
          <symbol id="linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </symbol>
          <symbol id="instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </symbol>
          <symbol id="whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </symbol>
          <symbol id="facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </symbol>

          <symbol id="star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
          </symbol>

          <symbol id="phone-flip" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0zM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11q.148 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169s0 .065-.13.187c-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883s-.535-.411-.882-.571M7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
          </symbol>
        </svg>
        <div className="flex justify-center relative my-32">
          <div className="absolute w-[300px] top-[10%] translate-y-[-50%] translate-x-[-20%]">
            <h1 className="text-5xl uppercase font-semibold">Envie <span className="relative left-[37%]" >mensagens</span></h1>
          </div>
          <div className="absolute w-[300px] left-20 top-[50%] translate-y-[-50%]">
            <p className="text-xl">Não perca a oportunidade de articular o valor da sua marca com a ajuda de mensagens SMS.</p>
          </div>
          <div className="w-[600px] z-10">
            <Image width={600} height={500} src="/person-working-online.svg" alt="minha" className="w-full object-fill" />
          </div>
        </div>

        <div className='container mx-auto'>
          {/* PREÇO */}
          <div className="py-12" id="preco">
            <h2 className="pb-2 mb-5 border-b text-center text-4xl font-bold">Preçário simples</h2>
            <main>
              <div className="grid grid-cols-1 sm:grid-cols-2 dark:text-black  lg:grid-cols-4 gap-4 text-center">
                {/* <!-- Plano Free --> */}
                <div className="bg-white dark:text-black rounded-2xl shadow-md mb-4">
                  <div className="bg-gray-100  py-3 rounded-t-xl">
                    <h4 className="text-lg font-normal dark:text-black">Free</h4>
                  </div>
                  <div className="p-4">
                    <ul className="mt-3 mb-4 text-center">
                      <h1 className="text-3xl font-bold">kz2.500<small className="text-gray-500 text-sm">/100 sms</small></h1>
                      <br />
                      <h1 className="text-3xl font-bold">100 sms</h1>
                      <br />
                    </ul>
                    <button className="w-full py-2 bg-transparent border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white">Comprar</button>
                  </div>
                </div>
                {/* <!-- Plano Pro --> */}
                <div className="bg-white dark:text-black rounded-lg shadow-md mb-4">
                  <div className="bg-gray-100 py-3 rounded-t-xl">
                    <h4 className="text-lg font-normal">Pro</h4>
                  </div>
                  <div className="p-4">
                    <ul className="mt-3 mb-4 text-center">
                      <h1 className="text-3xl font-bold">kz 2.500<small className="text-gray-500 text-sm">/100 sms</small></h1>
                      <br />
                      <h1 className="text-3xl font-bold">100 sms</h1>
                      <br />
                    </ul>
                    <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Comprar</button>
                  </div>
                </div>
                {/* <!-- Plano Enterprise --> */}
                <div className="bg-white rounded-lg shadow-md mb-4 border-blue-500">
                  <div className="bg-blue-500 text-white py-3 rounded-t-xl">
                    <h4 className="text-lg font-normal">Enterprise</h4>
                  </div>
                  <div className="p-4">
                    <ul className="mt-3 mb-4 text-center">
                      <h1 className="text-3xl font-bold">kz 2.500<small className="text-gray-500 text-sm">/100 sms</small></h1>
                      <br />
                      <h1 className="text-3xl font-bold">100 sms</h1>
                      <br />
                    </ul>
                    <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Comprar</button>
                  </div>
                </div>
                {/* <!-- Plano Enterprise (Segunda opção) --> */}
                <div className="bg-white rounded-lg shadow-md mb-4 border-blue-500">
                  <div className="bg-blue-500 text-white py-3 rounded-t-xl">
                    <h4 className="text-lg font-normal">Enterprise</h4>
                  </div>
                  <div className="p-4">
                    <ul className="mt-3 mb-4 text-center">
                      <h1 className="text-3xl font-bold">kz 2.500<small className="text-gray-500 text-sm">/100 sms</small></h1>
                      <br />
                      <h1 className="text-3xl font-bold">100 sms</h1>
                      <br />
                    </ul>
                    <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Comprar</button>
                  </div>
                </div>
              </div>
            </main>
          </div>

          <section id="about" className="pt-12">
            <div className="container mx-auto">
              <div className="flex flex-wrap">
                {/* <!-- Imagem --> */}
                <div className="w-full lg:w-7/12">
                  <Image width={600} height={400} className="w-full h-auto" src="/administrator-working-on-computer.svg" alt="Administrator-working-on-computer" />
                </div>

                {/* <!-- Texto --> */}
                <div className="w-full lg:w-5/12 px-4">
                  <h3 className="text-2xl font-bold mb-4">Envie facilmente mensagens de texto em massa</h3>
                  <p className="mb-4">
                    Envie mensagens de texto de alto volume rapidamente com nosso serviço de mensagens
                    de texto em massa. Entre em contato com clientes, funcionários ou prestadores de
                    serviço da maneira mais eficiente com a plataforma SMS mais rápida e confiável
                    de Angola.
                  </p>
                  <p className="mb-4">
                    Envie SMS de alto volume sem sacrificar a personalização. Integre SMS em seus
                    aplicativos para enviar mensagens de texto sempre que seus clientes interagem com
                    sua empresa.
                  </p>
                  <div className="pt-1">
                    <Link href="/signup" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Cadastrar</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <div className='py-24' id="sobre">

            <div className="text-center">
              <h2 className="text-4xl font-bold">Perguntas frequentes</h2>
              <p>Veja as perguntas que os usuários costumam fazer constantemente</p>
            </div>
            <div className="flex flex-wrap pt-10 gap-4 ">
              <div className="w-full lg:w-[49%]">
                <div className="">
                  <div className="divide-y divide-stone-100 dark:divide-stone-700 overflow-hidden rounded-lg border border-indigo-200 dark:border-indigo-900 bg-white dark:bg-gray-900 shadow-sm ">
                    <details className="group" open>
                      <summary
                        className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-indigo-900 dark:text-black group-open:bg-indigo-50 dark:group-open:bg-indigo-900/20">
                        O que é o SMS APP e como ele funciona?
                        <div className="text-indigo-500 dark:text-indigo-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </summary>
                      <div className="border-t border-t-stone-100 dark:border-t-stone-700 p-4 text-indigo-500 dark:text-zinc-900">
                        O SMS APP é um software de envio de mensagens em massa ,que permite empresas e
                        profissionais se comunicarem com seus clientes através de SMS Marketing. Ele facilita
                        a criação, envio e rastreamento de campanhas de mensagens de texto para promover produtos,
                        serviços e atualizações.</div>
                    </details>

                    <details className="group">
                      <summary
                        className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-indigo-900 dark:text-black group-open:bg-indigo-50 dark:group-open:bg-indigo-900/20">
                        Como posso criar uma campanha de SMS?
                        <div className="text-indigo-500 dark:text-indigo-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </summary>
                      <div className="border-t border-t-stone-100 dark:border-t-stone-700 p-4 text-indigo-500 dark:text-zinc-900">Using
                        Para criar uma campanha, faça <Link href="/login">login</Link> no app.smsApp-sms.com,
                        acesse a seção de campanhas, escolha o tipo de campanha
                        (mensagem em massa, agendamento, etc.), redija sua mensagem,
                        selecione ou carregue sua lista de contactos e defina a data e hora
                        de envio, se desejar agendar. Em seguida, revise e confirme
                        o envio.</div>
                    </details>

                    <details className="group">
                      <summary
                        className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-indigo-900 dark:text-black group-open:bg-indigo-50 dark:group-open:bg-indigo-900/20">
                        Quais são as principais funcionalidades do SMS APP?
                        <div className="text-indigo-500 dark:text-indigo-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </summary>
                      <div className="border-t border-t-stone-100 dark:border-t-stone-700 p-4 text-indigo-500 dark:text-zinc-900">The main
                        O SMS APP oferece funcionalidades como envio em massa, personalização de
                        mensagens, agendamento de envios, transferencia de saldo,
                        relatórios de entrega, gestão de contatos, e integração com outros sistemas.</div>
                    </details>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[49%]">
                <div className="">
                  <div className="divide-y divide-stone-100 dark:divide-stone-700 overflow-hidden rounded-lg border border-indigo-200 dark:border-indigo-900 bg-white dark:bg-gray-900 shadow-sm">
                    <details className="group" open>
                      <summary
                        className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-indigo-900 dark:text-black group-open:bg-indigo-50 dark:group-open:bg-indigo-900/20">
                        Posso testar o SMS APP antes de contratar?
                        <div className="text-indigo-500 dark:text-indigo-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </summary>
                      <div className="border-t border-t-stone-100 dark:border-t-stone-700 p-4 text-indigo-500 dark:text-zinc-900">While
                        Sim, oferecemos 5 SMS de teste gratuito para que você
                        possa experimentar todas as funcionalidades do SMS APP antes de tomar uma decisão.
                      </div>
                    </details>

                    <details className="group">
                      <summary
                        className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-indigo-900 dark:text-black group-open:bg-indigo-50 dark:group-open:bg-indigo-900/20">
                        Existe algum limite diário ou mensal para o envio de mensagens?
                        <div className="text-indigo-500 dark:text-indigo-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </summary>
                      <div className="border-t border-t-stone-100 dark:border-t-stone-700 p-4 text-indigo-500 dark:text-zinc-900">Using
                        Sim, os limites podem variar conforme o plano escolhido.
                        Verifique os detalhes específicos no site ou na documentação..</div>
                    </details>

                    <details className="group">
                      <summary
                        className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-indigo-900 dark:text-black group-open:bg-indigo-50 dark:group-open:bg-indigo-900/20">
                        É possível personalizar as mensagens enviadas?
                        <div className="text-indigo-500 dark:text-indigo-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </summary>
                      <div className="border-t border-t-stone-100 dark:border-t-stone-700 p-4 text-indigo-500 dark:text-zinc-900">The main
                        Sim, o FOI permite a personalização das mensagens,
                        como incluir o nome do destinatário ou outras informações específicas,
                        tornando a comunicação mais pessoal e eficaz..</div>
                    </details>
                  </div>
                </div>
              </div>
            </div >
          </div >

          {/* ESTRATEGIA1 */}
          <section className="flex items-center justify-center py-20">
            <div className="w-full max-w-screen-lg">
              <div className="text-center">
                <h2 className="text-3xl font-semibold mb-4">Desenvolva sua estratégia de marketing de SMS e acompanhe seu crescimento de vendas</h2>
                <p className="text-lg mb-6">Construa uma estratégia de comunicação com o cliente de alto nível para aumentar a fidelidade, a taxa de conversão e o tamanho médio da verificação. Experimente agora.</p>
                <Link href="/login" className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition">Crie uma campanha de SMS</Link>
                <p className="mt-4 text-sm">Obtenha resultados após um mês de campanhas regulares</p>
              </div>
            </div>
          </section>

          {/* Vantagens */}
          <div className="container px-4 py-5" id="vantagens">
            <h2 className="pb-2 text-4xl border-b text-center">Vantagens do SMS APP</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-5">
              <div className="col">
                <div className="relative h-full overflow-hidden text-white rounded-2xl shadow-lg" style={{ backgroundImage: "url('unsplash-photo-1.jpg')" }}>
                  <div className="flex flex-col h-full px-5 py-10 bg-black bg-opacity-50">
                    <h3 className="mt-5 mb-4 text-3xl font-bold text-center">INFORMATIVO</h3>
                    <p>Mantenha seus clientes atualizados com as últimas novidades e informações importantes por SMS com ajuda do FOI.</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="relative h-full overflow-hidden text-white rounded-2xl shadow-lg" style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}>
                  <div className="flex flex-col h-full px-5 py-10 bg-black bg-opacity-50">
                    <h3 className="mt-5 mb-4 text-3xl font-bold text-center">PUBLICIDADE</h3>
                    <p>Publicite o seu produto com o FOI e engaje seu público com campanhas, por SMS.</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="relative h-full overflow-hidden text-white rounded-2xl shadow-lg" style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}>
                  <div className="flex flex-col h-full px-5 py-10 bg-black bg-opacity-50">

                    <h3 className="mt-5 mb-4 text-3xl font-bold text-center">PROMOÇÕES</h3>
                    <p>Informe seus clientes sobre ofertas e promoções de forma eficaz, garantindo que sua mensagem chegue pontualmente a todos, com o FOI.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        {/* FOOTER */}

        <footer className="bg-gray-900 text-white pt-12 pb-10" id="footer">
          <div className="container mx-auto text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1">
                <h5 className="text-xl font-semibold text-yellow-500 mb-3">SMS APP</h5>
                <p>
                  O SMS APP é um software de envio de mensagens em massa que permite empresas
                  e profissionais se comunicarem com seus clientes através de SMS Marketing.
                </p>
              </div>

              <div className="col-span-1">
                <h5 className="text-xl font-semibold text-yellow-500 mb-4">Produtos</h5>
                <ul>
                  <li><Link href="#" className="text-white hover:text-yellow-500">Proximo</Link></li>
                  <li><Link href="#" className="text-white hover:text-yellow-500">Criatividade</Link></li>
                  <li><Link href="#" className="text-white hover:text-yellow-500">Gestão de Prod</Link></li>
                  <li><Link href="#" className="text-white hover:text-yellow-500">Finance</Link></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h5 className="text-xl font-semibold text-yellow-500 mb-4">Links úteis</h5>
                <ul>
                  <li><Link href="#" className="text-white hover:text-yellow-500">Preços</Link></li>
                  <li><Link href="#vantagens" className="text-white hover:text-yellow-500">Vantagens</Link></li>
                  <li><Link href="#faq" className="text-white hover:text-yellow-500">FAQ</Link></li>
                  <li><Link href="#" className="text-white hover:text-yellow-500">Termos e Condições</Link></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h5 className="text-xl font-semibold text-yellow-500 mb-4">Contactos</h5>
                <ul>
                  <li><Link href="#" className="text-white hover:text-yellow-500"> <span className="mr-3">🏠</span>Rangel-Bairro CTT's, Digital.ao</Link></li>
                  <li><Link href="#" className="text-white hover:text-yellow-500"> <span className="mr-3">📧</span>info@proevolution.ao</Link></li>
                  <li><Link href="#" className="text-white hover:text-yellow-500"> <span className="mr-3">📞</span>(+244) 927264476</Link></li>
                  <li><Link href="#" className="text-white hover:text-yellow-500"> <span className="mr-3"></span>(+244) 927264476</Link></li>
                </ul>
              </div>
            </div>

            <hr className="my-8 border-gray-700" />

            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left">
                <p>
                  Copyright @2024 Todos os direitos reservados
                  <a href="#" className="text-yellow-500 font-semibold">ProEvolution</a>
                </p>
              </div>

              <div className="flex justify-center md:justify-end space-x-4">
                <Link href="#" className="text-white hover:text-yellow-500">
                  <svg className="w-6 h-6">
                    <use href="#facebook" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-yellow-500">
                  <svg className="w-6 h-6">
                    <use href="#linkedin" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-yellow-500">
                  <svg className="w-6 h-6">
                    <use href="#whatsapp" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-yellow-500">
                  <svg className="w-6 h-6">
                    <use href="#instagram" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
