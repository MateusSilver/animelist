const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const animeData = [
      {
        id: "4fc63fd9-a425-4a27-9b9c-397cc051c60d",
        name: "Jujutsu Kaisen",
        sinopsis:
          "Entregando-se preguiçosamente a atividades paranormais sem base com o Clube de Ocultismo, o estudante Yuuji Itadori passa seus dias no clube ou no hospital, visitando seu avô acamado. No entanto, esse estilo de vida descontraído logo muda para o estranho quando ele, sem saber, encontra um item amaldiçoado. Desencadeando uma série de eventos sobrenaturais, Yuuji se vê de repente lançado no mundo das Maldições - seres terríveis formados pela malícia e negatividade humana - após engolir o referido item, que se revela ser um dedo pertencente ao demônio Sukuna Ryoumen, o Rei das Maldições. Yuuji experimenta em primeira mão a ameaça que essas Maldições representam para a sociedade ao descobrir seus próprios poderes recém-adquiridos. Apresentado à Escola Secundária Jujutsu da Prefeitura de Tóquio, ele começa a trilhar um caminho do qual não pode mais voltar - o caminho de um feiticeiro Jujutsu.",
        autor: "GeGe Akutami",
        coverUrl:
          "https://utfs.io/f/4c9a8d43-76bb-4352-8337-2e2bd82dae0e-ufkqi2.jpg",
        season: 1,
        studio: "MAPPA",
        type: "TV",
      },
      {
        id: "6afd6aa1-a95a-4947-af12-34a93f38fa8c",
        name: "Psycho Pass",
        sinopsis:
          "A justiça, e a forma como ela é aplicada, mudou drasticamente. No século 22, o Japão adota o Sistema Sibyl, um método objetivo para determinar o nível de ameaça de cada cidadão. Esse sistema analisa o estado mental das pessoas à procura de sinais de intenção criminosa, medidos por um valor chamado Psycho-Pass. Os Inspetores aplicam a lei subjugando, muitas vezes de forma letal, qualquer um que apresente a menor má intenção. Ao lado deles estão os Dominadores, Inspetores veteranos que se tornaram criminosos latentes. Em troca de relativa liberdade, eles executam o trabalho sujo dos Inspetores. É nesse mundo que surge Akane Tsunemori, uma jovem com um honesto desejo de defender a justiça. No entanto, ao trabalhar ao lado do experiente Dominador Shinya Kougami, ela logo descobre que os julgamentos do Sistema Sibyl não são tão infalíveis quanto seus colegas Inspetores pensam. Com tudo o que ela acreditava colocado em xeque, Akane luta com a questão do que é a verdadeira justiça e se ela pode ser alcançada por meio de um sistema potencialmente corrupto.",
        autor: "Gen Urobushi",
        coverUrl:
          "https://utfs.io/f/d6e92d1a-af41-4038-b1f2-aefd312dbd24-qdx1re.jpg",
        season: 1,
        studio: "Production I.G.",
        type: "TV",
      },
      {
        id: "e6d2fb59-a0fb-4d5c-a492-fe7c6c07743d",
        name: "Odd Taxi",
        sinopsis:
          'Excentrico e direto, o taxista Hiroshi Odokawa leva uma vida relativamente normal. Dirigindo o táxi como ganha-pão, ele conhece diversos personagens únicos: o desempregado Taichi Kabasawa obcecado por viralizar na internet, a misteriosa enfermeira Miho Shirakawa, a dupla de comediantes em dificuldades ""Homo Sapiens"" e Dobu, um delinquente conhecido. Mas a vida simples de Odokawa está prestes a virar de cabeça para baixo. O caso de uma menina desaparecida, investigado pela polícia, leva até ele, e agora tanto a yakuza quanto uma dupla de policiais corruptos estão em seu encalço.',
        autor: "Kazuya Konomoto",
        coverUrl:
          "https://utfs.io/f/9286c33e-8fe0-454f-a962-41d283f549c7-r5wh6k.jpg",
        season: 1,
        studio: "OLM",
        type: "TV",
      },
      {
        id: "462f0625-6344-476b-b942-ccdc458619a3",
        name: "Kono Subarashii Sekai ni Shukufuku wo! 2",
        sinopsis:
          'Quando Kazuma Satou morreu, ele teve duas opções: ir para o céu ou renascer em um mundo de fantasia. Ao escolher o novo mundo, a deusa Aqua lhe encarregou de derrotar o Rei Demônio, permitindo que ele levasse qualquer arma para ajudá-lo. Infelizmente, Kazuma optou por trazer a própria Aqua e se arrependeu amargamente desde então. Não só está preso a uma divindade inútil que virou a arcipreste do grupo, como a dupla ainda precisa ganhar dinheiro suficiente para o sustento. Para piorar a situação, o grupo continuou a crescer à medida que aventureiros mais problemáticos se juntaram a eles. A maga simbólica, Megumin, é uma especialista em magia explosiva que só consegue lançar um feitiço por dia e se recusa a aprender mais nada. Há também a paladina leal, Lalatina Ford ""Trevas"" Dustiness, uma masoquista indefesa que faz Kazuma parecer puro em comparação. ""KonoSuba: God\'s Blessing on this Wonderful World! 2"" continua acompanhando Kazuma e o resto de seu grupo em inúmeras outras aventuras enquanto lutam para ganhar dinheiro e lidar com as personalidades problemáticas uns dos outros. No entanto, as coisas raramente saem como planejado, e eles frequentemente se desviam do caminho devido às suas próprias tendências idiotas.',
        autor: "Natsumi Akatsuki",
        coverUrl:
          "https://utfs.io/f/91326065-1258-4eff-bc1c-1b1c364f222c-h971ud.jpg",
        season: 2,
        studio: "Studio Deen",
        type: "TV",
      },
      {
        id: "c5e4fd23-685d-4066-b40e-bc3b4569bddd",
        name: "Oshi no Ko",
        sinopsis:
          "No mundo do entretenimento, as celebridades frequentemente exibem versões exageradas de si mesmas para o público, ocultando seus verdadeiros pensamentos e lutas sob mentiras elaboradas. Os fãs compram essas fachadas, inundando seus ídolos com amor e apoio incondicional, até que algo quebre a ilusão. Ai Hoshino, estrela em ascensão de 16 anos do grupo pop B Komachi, tem o mundo cativado; no entanto, quando ela anuncia um hiato devido a problemas de saúde, a notícia deixa muitos preocupados. Sendo um grande fã de Ai, o ginecologista Gorou Amemiya a apoia de longe, em seu consultório médico no interior, desejando poder conhecê-la pessoalmente um dia. Seu desejo se torna realidade quando Ai aparece em seu hospital - não doente, mas grávida de gêmeos! Enquanto o médico promete a Ai um parto seguro para seus filhos, ele se pergunta se esse encontro com a ídola mudará para sempre a natureza de seu relacionamento com ela.",
        autor: "Aka Akasaka",
        coverUrl:
          "https://utfs.io/f/894932e8-8de7-475d-b21b-51f370b5ecfa-hvw1yw.jpg",
        season: 1,
        studio: "Doga Kobo",
        type: "TV",
      },
      {
        id: "2a68ffc3-8943-4ad1-a1bf-f0a967cb6d22",
        name: "Kimetsu no Yaiba: Hashira Geiko-hen",
        sinopsis: "Nova temporada de Kimetsu no Yaiba.",
        autor: "Koyoharu Gotouge",
        coverUrl:
          "https://utfs.io/f/cd393349-4aa8-4202-806f-eb2eaf20c30e-7jigy1.jpg",
        season: 5,
        studio: "Ufotable",
        type: "TV",
      },
      {
        id: "aeea25a3-a8de-4616-84b9-c01d193b875b",
        name: "Mob Psycho 100: II",
        sinopsis:
          'Shigeo ""Mob"" Kageyama está amadurecendo e entendendo seu papel como um poderoso paranormal que pode afetar drasticamente a vida das pessoas. Ele e seu mentor, Reigen Arataka, continuam lidando com pedidos sobrenaturais de clientes, seja exorcizando espíritos malignos ou desmascarando lendas urbanas que assombram os cidadãos. Embora o fluxo de trabalho permaneça o mesmo, Mob não está mais apenas seguindo Reigen cegamente. Com toda a sua experiência como um poderoso espreita, as aventuras sobrenaturais de Mob agora carregam um peso maior. As coisas assumem um tom mais sério e sombrio, já que os perigos que Mob e Reigen enfrentam são muito mais tangíveis e perturbadores do que nunca.',
        autor: "ONE",
        coverUrl:
          "https://utfs.io/f/5840f0df-5eb2-4111-bfad-99c7481e59fb-7ash6e.jpg",
        season: 2,
        studio: "Bones",
        type: "TV",
      },
      {
        id: "102e2fb7-5c4d-4933-a4e6-68c3b4e94f97",
        name: "Another",
        sinopsis:
          "Na sala 3-3 da Escola Municipal Yomiyama Norte, o aluno transferido Kouichi Sakakibara retorna após um mês de licença médica. Entre seus novos colegas de classe, ele se sente inexplicavelmente atraído por Mei Misaki - uma garota reservada que usa um tapa-olho, a qual ele conheceu no hospital durante sua ausência. Mas nenhum de seus colegas a reconhece; na verdade, alertam Kouichi para não se envolver com coisas que não existem. Ignorando as palavras de cautela, Kouichi faz amizade com Mei - e logo descobre a verdade sinistra por trás da apreensão de seus colegas. Os rumores sinistros giram em torno de um ex-aluno da turma 3-3. No entanto, ninguém quer compartilhar os detalhes completos do evento sombrio com Kouichi. Envolvido na maldição que assola sua classe, Kouichi começa a descobrir a ligação dela com sua nova amiga. À medida que uma série de tragédias surge ao redor deles, cabe agora a Kouichi, Mei e seus colegas desvendar o misterioso enigma - mas desvendá-lo terá um preço alto.",
        autor: "Yukito Ayatsuji",
        coverUrl:
          "https://utfs.io/f/e0f0bbce-9d47-4d47-94c1-7c5921c98dd8-e2rqil.jpg",
        season: 1,
        studio: "P.A. Works",
        type: "TV",
      },
      {
        id: "7c16b426-dd42-4421-a65c-3e35f2adea78",
        name: "Steins;Gate",
        sinopsis:
          'O excêntrico cientista Rintarou Okabe possui uma sede insaciável por exploração científica. Junto com sua amiga Mayuri Shiina, atrapalhada porém bem-intencionada, e seu companheiro de quarto Itaru Hashida, Okabe funda o Laboratório de Artefatos Futuristas na esperança de criar inovações tecnológicas que desafiem a mente humana. Apesar das promessas grandiosas, o único ""artefato"" notável que o trio criou é um micro-ondas que possui o poder misterioso de transformar bananas em gosma verde. No entanto, quando Okabe participa de uma conferência sobre viagem no tempo, ele experimenta uma série de eventos estranhos que o levam a acreditar que o ""Micro-ondas Telefone"" tem muito mais potencial do que aparenta. Aparentemente capaz de enviar mensagens de texto para o passado usando o micro-ondas, Okabe se aprofunda na exploração da ""máquina do tempo"", atraindo a ira e a atenção da misteriosa organização SERN. Devido à nova descoberta, Okabe e seus amigos se veem em um perigo constante. Enquanto trabalha para mitigar os danos que sua invenção causou na linha do tempo, Okabe luta não apenas para salvar seus entes queridos, mas também para preservar sua sanidade cada vez mais frágil.',
        autor: "Nitroplus",
        coverUrl:
          "https://utfs.io/f/c5430686-404b-493a-9f40-fe76c82748e0-ddhhta.jpg",
        season: 1,
        studio: "White Fox",
        type: "TV",
      },
      {
        id: "5f55dcab-294a-4532-a718-450b25435d44",
        name: "Kono Subarashii Sekai ni Shukufuku wo! Movie: Kurenai Densetsu",
        sinopsis:
          "Não é à toa que as forças do Rei Demônio temem os Demônios Carmesim, o clã de onde Megumin e Yunyun se originam. Mesmo que os generais do Rei Demônio ataquem sua vila, os Demônios Carmesim podem facilmente afastá-los com seu domínio supremo da magia avançada e poderosa. Quando Yunyun recebe uma carta aparentemente séria sobre um possível desastre que se aproxima de sua cidade natal, ela imediatamente informa Kazuma Satou e o resto de seu grupo. Após uma série de mal-entendidos malucos, acaba sendo apenas uma brincadeira de um de seus companheiros demônios que deseja ser escritor. Mesmo assim, Megumin fica preocupada com sua família e parte para a vila dos Demônios Carmesim com a turma. Lá, Kazuma e os outros decidem conhecer as maravilhas da terra natal de Megumin. No entanto, eles logo percebem que a ameaça absurda que receberam pode ter sido mais do que apenas uma piada.",
        autor: "Natsumi Akatsuki",
        coverUrl:
          "https://utfs.io/f/c9692413-fb37-4dd6-92cb-b13eeda83ab8-nn7mua.jpg",
        season: 3,
        studio: "J.C. Staff",
        type: "Filme",
      },
      {
        id: "bfa55ecb-f9a0-4628-a162-47f38398ecf9",
        name: "Kimetsu no Yaiba: Mugen Ressha-hen",
        sinopsis:
          "Uma série misteriosa de desaparecimentos em um determinado trem chamou a atenção dos exterminadores de demônios, que enviou um de seus melhores espadachins para exterminar o que só pode ser um demônio responsável. No entanto, o plano de embarcar no Trem Infinito é atrasado por um demônio menor que está aterrorizando os mecânicos e visando uma gentil senhora idosa e sua neta. Kyojuro Rengoku, o Pilar das Chamas, deve eliminar a ameaça antes de embarcar no trem. Enviados para auxiliar o Pilar, Tanjiro Kamado, Inosuke Hashibira e Zenitsu Agatsuma entram no trem preparados para lutar. Mas o seu alvo demoníaco já tem um plano diabólico reservado para eles e os duzentos passageiros: mergulhando profundamente em suas consciências, o demônio pretende obliterar a todos em uma demonstração impressionante do poder detido pelas Doze Luas Demoníacas.",
        autor: "Koyoharu Gotouge",
        coverUrl:
          "https://utfs.io/f/9c86362c-8c1e-4599-9e68-513dc2700f85-7jigxy.jpg",
        season: 2,
        studio: "Ufotable",
        type: "TV",
      },
      {
        id: "35399e42-c772-465a-80a7-4277f31afb79",
        name: "Kimetsu no Yaiba: Yuukaku-hen",
        sinopsis:
          "A devastação causada pelo incidente do Trem Infinito ainda pesa sobre os membros dos Exterminadores de Demônios. Apesar do tempo para se recuperarem, a vida continua, pois a maldade nunca dorme: um demônio cruel está aterrorizando as belas mulheres do Distrito de Entretenimento de Yoshiwara. O Pilar do Som, Tengen Uzui, e suas três esposas estão investigando o caso. No entanto, quando ele perde contato com suas esposas rapidamente, Tengen teme o pior e pede a ajuda de Tanjirou Kamado, Zenitsu Agatsuma e Inosuke Hashibira para se infiltrarem nas casas mais proeminentes do distrito e localizar o depravado Demônio Lua Superior.",
        autor: "Koyoharu Gotouge",
        coverUrl:
          "https://utfs.io/f/1b202663-6cbe-4afa-bd31-25fedb8743fe-7jigxz.jpg",
        season: 3,
        studio: "Ufotable",
        type: "TV",
      },
      {
        id: "47dbe166-87d1-4fe6-abbe-d552afb61ea5",
        name: "Mob Psycho 100",
        sinopsis:
          'Shigeo ""Mob"" Kageyama despertou sua poderosa habilidade psíquica ainda na infância. Mas o poder logo se provou um fardo quando ele percebeu o potencial perigo que suas habilidades representavam. Optando por suprimir esse poder, Mob só o utiliza atualmente para impressionar sua paixão de longa data, Tsubomi, que logo se cansa de ver os mesmos truques. Para conseguir controlar suas habilidades, Mob se coloca sob a tutela de Arataka Reigen, um vigarista que se autoproclama sensitivo e explora os poderes de Mob para ganhar trocados. Agora, exorcizar espíritos malignos sob comando se tornou parte da vida cotidiana e monótona de Mob. No entanto, a energia psíquica que ele exerce é apenas a ponta do iceberg. Se seu vasto potencial e emoções descontroladas explodirem, um evento catastrófico o transformará completamente. A progressão em direção à explosão de Mob está crescendo e tentar detê-la é inútil.',
        autor: "ONE",
        coverUrl:
          "https://utfs.io/f/3fdbed64-ef1a-44a2-b97d-1961734f5819-wl6eg5.jpg",
        season: 1,
        studio: "Bones",
        type: "TV",
      },
      {
        id: "14a05728-6c61-4f63-95cb-95c525fa67a6",
        name: "Mob Psycho 100: III",
        sinopsis:
          'Após frustrar uma conspiração que ameaçava o mundo, Shigeo ""Mob"" Kageyama retorna para enfrentar os aspectos mais exaustivos de sua vida mundana - começando pelo preenchimento do terrível formulário de carreira da escola. Enquanto isso, ele continua auxiliando seu mentor Arataka Reigen e o novo recruta do escritório, Katsuya Serizawa, na resolução de casos paranormais de seus clientes. Ao mesmo tempo que cumpre seus deveres, Mob também trabalha para ganhar mais independência em sua vida como espreita e como humano, além de tentar se integrar melhor com as pessoas ao seu redor. No entanto, novos desafios sobrenaturais e mundanos testam a estabilidade emocional de Mob e o forçam a confrontar as realidades ao seu redor. À medida que se esforça para seguir em frente no caminho da maturidade, Mob deve resolver suas crises emocionais e reavaliar a ingenuidade que carregou por tanto tempo.',
        autor: "ONE",
        coverUrl:
          "https://utfs.io/f/ce4e98d8-2bbb-49b9-8a65-131e0ec9a3e5-7ash6d.jpg",
        season: 3,
        studio: "Bones",
        type: "TV",
      },
      {
        id: "d863d020-5c96-4414-b509-b00f14b171dc",
        name: "Kimetsu no Yaiba: Katanakaji no Sato-hen",
        sinopsis:
          "Por séculos, o esquadrão dos exterminadores de demônios guardou a localização da Vila dos Ferreiros a sete chaves. Lar dos melhores artesãos de espadas, a vila fornece aos Caçadores de Demônios as armas mais refinadas, permitindo-lhes enfrentar bestas noturnas e garantir a segurança dos humanos. Após sua espada sofrer um dano grave e ser considerada inútil, Tanjiro Kamado, junto com sua preciosa irmãzinha Nezuko, é escoltado até a vila para receber uma nova. Enquanto isso, a morte de um Lua Superior abala a ordem pacífica do mundo demoníaco. Conforme Tanjiro se familiariza com o Pilar da Névoa, Muichiro Tokitou, e a Pilar do Amor, Mitsuri Kanroji, poderes ferozes emergem das sombras e ameaçam estilhaçar a maior linha de defesa dos Exterminadores de Demônios.",
        autor: "Koyoharu Gotouge",
        coverUrl:
          "https://utfs.io/f/82d9c0f7-832e-4b51-9e9e-f84a6a5c0300-7jigy0.jpg",
        season: 4,
        studio: "Ufotable",
        type: "TV",
      },
      {
        id: "7ec14ada-37af-4f61-ace0-68401556fb17",
        name: "Summertime Render",
        sinopsis:
          'Desde a morte de seus pais, Shinpei Ajiro morava com a família Kofune e suas duas filhas, Mio e Ushio. Embora tenha saído da ilha natal para continuar seus estudos em Tóquio, Shinpei retorna após o trágico afogamento de Ushio durante a tentativa de resgate de uma menina. Durante o funeral, seu melhor amigo o informa sobre hematomas encontrados no pescoço de Ushio, lançando dúvidas sobre a causa de sua morte. Suspeitando de um assassinato, Shinpei reavalia os eventos recentes, mas estranhos incidentes continuam a acontecer. O desaparecimento de pessoas e outros eventos inexplicáveis levam Mio a se lembrar de um antigo conto folclórico sobre entidades chamadas ""Sombras"", que podem não ser apenas fantasia. Supostamente, um encontro com a própria Sombra pressagia a morte iminente de uma pessoa.',
        autor: "Yasuki Tanaka",
        coverUrl:
          "https://utfs.io/f/f8cb6252-65bc-41dd-a6c9-0c23620a3dc8-a0tklj.jpg",
        season: 1,
        studio: "OLM",
        type: "TV",
      },
      {
        id: "79786c16-6682-4b72-b27b-b2852d3d572f",
        name: "Kono Subarashii Sekai ni Shukufuku wo! 3",
        sinopsis:
          "Terceira temporada de Kono Subarashii Sekai ni Shukufuku wo!",
        autor: "Natsumi Akatsuki",
        coverUrl:
          "https://utfs.io/f/16039189-261a-47fb-8d9f-f7b77178ce74-h971uc.jpg",
        season: 3,
        studio: "Drive",
        type: "TV",
      },
      {
        id: "2223e221-60c6-464a-9542-32b3f9fde73e",
        name: "Chainsaw Man",
        sinopsis:
          "Denji foi roubado da vida normal de um adolescente, restando-lhe apenas a dívida colossal de seu pai falecido. Sua única companheira é sua mascote, a Pochita, o demônio da motosserra, com quem ele caça demônios para ganhar dinheiro que inevitavelmente vai parar nos bolsos da yakuza. Tudo o que Denji pode fazer é sonhar com uma vida boa e simples: com comida deliciosa e uma linda namorada ao seu lado. Mas um ato ganancioso de traição por parte da yakuza leva à morte brutal e prematura de Denji, destruindo toda esperança de ele alcançar a felicidade. De forma surpreendente, um antigo contrato permite que Pochita se funda com o falecido Denji e lhe conceda poderes demoníacos, transformando-o em um híbrido capaz de transformar partes do seu corpo em motosserras. Como as novas habilidades de Denji representam um risco significativo para a sociedade, Makima, a caçadora de demônios de elite da Segurança Pública, o acolhe, deixando-o viver desde que obedeça às suas ordens. Guiado pela promessa de uma vida contente ao lado de uma mulher atraente, Denji dedica tudo e luta com todas as suas forças para tornar seus sonhos ingênuos realidade.",
        autor: "Tatsuki Fujimoto",
        coverUrl:
          "https://utfs.io/f/9ecdce97-e3ea-4e4b-ba70-11c33f56db42-6faw6j.jpg",
        season: 1,
        studio: "MAPPA",
        type: "TV",
      },
      {
        id: "2b0ead60-8564-417e-b4e7-052b057577ab",
        name: "Kono Subarashii Sekai ni Shukufuku wo!",
        sinopsis:
          "Depois de morrer de forma patética e ridícula voltando para casa com um jogo novo, o estudante recluso Kazuma Satou se vê diante de uma deusa linda, mas insuportável, chamada Aqua. Ela oferece ao NEET duas opções: seguir para o céu ou reencarnar no sonho de todo jogador - um mundo de fantasia real! Optando por começar uma nova vida, Kazuma logo recebe a missão de derrotar o Rei Demônio que está aterrorizando as vilas. Mas antes de partir, ele pode escolher qualquer item para ajudá-lo em sua jornada, e o futuro herói escolhe Aqua. Porém, Kazuma cometeu um erro grave - Aqua é completamente inútil! Infelizmente, seus problemas não param por aí; morar em um mundo de fantasia é bem diferente de como acontece em um jogo. Ao invés de partir em uma aventura emocionante, a dupla precisa primeiro trabalhar para pagar suas contas. De fato, as desgraças deles estão apenas começando!",
        autor: "Natsumi Akatsuki",
        coverUrl:
          "https://utfs.io/f/b7dacab2-2718-4423-9206-cc7208d16f17-81e1ty.jpg",
        season: 1,
        studio: "Studio Deen",
        type: "TV",
      },
      {
        id: "5b5df5f6-938e-487f-9ed0-15a140988f95",
        name: "Perfect Blue",
        sinopsis:
          "Há dois anos, o grupo ídolo de J-pop, CHAM!, vem conquistando o coração dos fãs. Infelizmente, nem tudo dura para sempre, e o CHAM! precisa lidar com a saída de uma de suas integrantes, Mima Kirigoe, que deixará o grupo para perseguir a carreira de atriz. A decisão de Mima gera reações divididas, mas ela espera que seus admiradores continuem apoiando-a. No entanto, a vida de Mima sofre uma reviravolta drástica após sua saída do CHAM!. Desejando se livrar da imagem de ídolo pop, ela aceita um papel em uma série de drama criminal. A exigência da nova carreira logo se torna um fardo para Mima e sua empresária, Rumi Hidaka. Para piorar a situação, um fã obcecado, incapaz de aceitar que Mima deixou de ser a idol inocente, começa a persegui-la. Além disso, um novo site anônimo surge, descrevendo a vida de Mima com detalhes perturbadoramente precisos. E como se não bastasse, o CHAM! parece estar indo ainda melhor sem ela. Esses acontecimentos macabros se acumulam, levando Mima gradativamente à beira do colapso. A linha entre a realidade e a fantasia se torna tênue, e ela luta para manter a sanidade.",
        autor: "Yoshikazu Takeuchi",
        coverUrl:
          "https://utfs.io/f/9339c1b7-65fb-418a-877e-2f0543962b28-dperyy.jpg",
        season: 1,
        studio: "Mad House",
        type: "Filme",
      },
      {
        id: "8facc682-3164-4c91-8bae-a848b3f9d458",
        name: "Shingeki no Kyojin",
        sinopsis:
          "Séculos atrás, a humanidade foi massacrada à beira da extinção por criaturas humanoides monstruosas chamadas Titãs, forçando os humanos a se esconderem aterrorizados atrás de enormes muralhas concêntricas. O que torna esses gigantes verdadeiramente aterrorizantes é que seu gosto pela carne humana não nasce da fome, mas do que parece ser puro prazer. Para garantir sua sobrevivência, os remanescentes da humanidade começaram a viver dentro de barreiras defensivas, resultando em cem anos sem um único encontro com Titãs. No entanto, essa calmaria frágil logo é destruída quando um Titã colossal consegue romper a muralha externa, supostamente impenetrável, reacendendo a luta pela sobrevivência contra as abominações devoradoras de homens. Após presenciar uma perda pessoal terrível nas mãos das criaturas invasoras, Eren Yeager dedica sua vida à erradicação delas se alistando na Tropa de Exploração, uma unidade militar de elite que combate os humanoides impiedosos fora da proteção das muralhas. Eren, sua irmã adotiva Mikasa Ackerman e seu amigo de infância Armin Arlert se juntam à guerra brutal contra os Titãs e correm para descobrir uma maneira de derrotá-los antes que as últimas muralhas sejam violadas.",
        autor: "Hajime Isayama",
        coverUrl:
          "https://utfs.io/f/c3e180a5-40bb-41c2-aeec-f998a4329d0d-dqgwmb.jpg",
        season: 1,
        studio: "Wit Studio",
        type: "TV",
      },
      {
        id: "41bae560-5684-4418-a263-1c2265f269b0",
        name: "Kimetsu no Yaiba",
        sinopsis:
          "Desde a morte de seu pai, o fardo de sustentar a família recaiu sobre os ombros de Tanjirou Kamado. Apesar de viverem na pobreza em uma montanha remota, a família Kamado desfruta de uma vida relativamente pacífica e feliz. Um dia, Tanjirou decide descer até a vila local para ganhar um pouco de dinheiro vendendo carvão. Na volta, a noite cai, obrigando Tanjirou a se abrigar na casa de um homem estranho, que o avisa da existência de demônios devoradores de carne que se escondem na floresta à noite. Quando finalmente chega em casa no dia seguinte, é recebido por uma visão horripilante - toda a sua família foi massacrada. Pior ainda, a única sobrevivente é sua irmã Nezuko, que se transformou em um demônio sedento de sangue. Consumido pela raiva e pelo ódio, Tanjirou jura vingar sua família e ficar ao lado de seu único irmão restante. Junto ao misterioso grupo que se autodenomina Exterminadores de Demônios, Tanjirou fará o que for preciso para matar os demônios e proteger os resquícios da humanidade de sua querida irmã.",
        autor: "Koyoharu Getouge",
        coverUrl:
          "https://utfs.io/f/359f0c18-c432-4017-92b3-eb3e57cfb16d-7jigxx.jpg",
        season: 1,
        studio: "Ufotable",
        type: "TV",
      },
      {
        id: "7e679123-b551-49d7-bf99-680f20032a83",
        name: "Spy x Family",
        sinopsis:
          'Políticos corruptos, nacionalistas frenéticos e outras forças belicistas constantemente colocam em risco a frágil paz entre as nações vizinhas, Ostânia e Westalis. Apesar de suas tramas, o renomado espião e mestre do disfarce ""Twilight"" cumpre missões perigosas uma após a outra na esperança de que nenhuma criança tenha que vivenciar os horrores da guerra. Na movimentada cidade ostaniana de Berlint, Crepúsculo adota o codinome de ""Loid Forger"", um estimado psiquiatra. No entanto, sua verdadeira intenção é coletar informações sobre o proeminente político Donovan Desmond, que raramente aparece em público, a não ser na escola de seus filhos: a prestigiosa Academia Eden. Recrutando a funcionária solteira da prefeitura, Yor Briar, para se passar por sua esposa, e adotando a curiosa Anya, uma órfã de seis anos com poderes telepatas, Loid coloca seu plano em ação. Ele matriculará Anya na Academia Eden, onde espera que ela se destaque e lhe dê a chance de conhecer Donovan sem levantar suspeitas. Infelizmente para Loid, mesmo um homem de seus talentos tem dificuldade em bancar o pai e marido amoroso. E assim como Loid esconde sua verdadeira identidade, Yor - uma assassina do submundo conhecida como "Torn Princess" - e Anya - que pode ler mentes - também não planejam revelar seus próprios segredos. Embora essa família aparentemente perfeita seja baseada em mentiras, os Forger gradualmente percebem que o amor que compartilham supera tudo.',
        autor: "Tatsuya Endou",
        coverUrl:
          "https://utfs.io/f/5c0bdf2f-8960-472c-af24-abf4c1a1dc1d-czb9o6.jpg",
        season: 1,
        studio: "Clover Works",
        type: "TV",
      },
    ];

    for (let anime of animeData) {
      const id = anime.id;
      const name = anime.name;
      const sinopsis = anime.sinopsis;
      const autor = anime.autor;
      const cover = anime.coverUrl;
      const season = anime.season;
      const studio = anime.studio;
      const type = anime.type;
      await prisma.anime.create({
        data: {
          id: id,
          name: name,
          sinopsis: sinopsis,
          autor: autor,
          coverURL: cover,
          season: season,
          studio: studio,
          type: type,
        },
      });
    }

    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao popular banco de dados: ", error);
  }
}

seedDatabase();
