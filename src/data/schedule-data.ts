export type RoomType = "principal" | "laboratorio";

export interface Event {
  day?: string;
  time?: string;
  title?: string;
  speaker?: string;
  speakerDescription?: string;
  description?: string;
  secondLineDescription?: string;
  from?: string;
  other?: string;
  dayType?: string;
}

export type ScheduleData = Record<string, Record<RoomType, Event[]>>;

export const scheduleData: ScheduleData = {
  "04-10-2025": {
    principal: [
      {
        dayType: "Business Class",
        day: "04-10-2025",
        time: "10h00",
        title: "Abertura",
        speaker: "Fabio Iwai e João Pedro Junqueira",
        description: "CEO e Diretor Médico, Grupo Huntington",
      },
      {
        day: "04-10-2025",
        time: "11h00",
        title: "AULA 01",
        speaker: "Inovação e Exclusividade: Redefinindo a Jornada do Paciente",
        description: "Claudia Cohn - Diretora de Negócios Nacionais, Dasa",
      },
      {
        day: "04-10-2025",
        time: "12h00",
        title: "AULA 02",
        speaker: "Marketing Digital de Alta Performance para Negócios de Saúde",
        description:
          "Gustavo Santana e Dib Naim Sekkar, Sócios Diretores da Wigoo",
      },
      {
        day: "04-10-2025",
        time: "13h00",
        title: "AULA 03",
        speaker:
          "Dados que Transformam: Como a Análise Estratégica Impulsiona os Negócios ",
        description: "Daniel Marques - Data & Analytics Director; Natura",
      },
      {
        day: "04-10-2025",
        time: "14h00",
        title: "AULA 04",
        speaker:
          "Gestão Estratégica na saúde: Como Planejar o Futuro do Seu Negócio",
        description: "Luís Fernando Vieira Joaquim - Sócio, Deloitte",
      },
      {
        day: "04-10-2025",
        time: "15h00",
        title: "AULA 05",
        speaker:
          "Além do Consultório: Por que o Médico do Futuro Também  Precisa Pensar como Empresário",
        description: "Ricardo Salem Ribeiro - Diretor Executivo, Care Plus",
      },
      {
        day: "04-10-2025",
        time: "16h00",
        title: "ENCERRAMENTO",
        speaker: "Fabio Iwai e João Pedro Junqueira ",
        description:
          "Dados que Transformam: Como a Análise Estratégica Impulsiona os Negócios ",
      },
    ],
    laboratorio: [],
  },
  "04-11-2025": {
    principal: [
      {
        dayType: "CONGRESSO • 1º DIA",
        day: "04-11-2025",
        time: "08h30 - 09h00",
        title: "ABERTURA",
        speaker: "Boas vindas",
        speakerDescription: "Eduardo Motta, João Pedro Junqueira Caetano",
        description:
          "Agradecimentos aos patrocinadores e dar início ao congresso",
        secondLineDescription: "Maurício Chehin",
      },
      {
        day: "04-11-2025",
        time: "09h00 - 09h20",
        title: "AULA 01",
        speaker: "Revelando o desenvolvimento embrionário em tempo real",
        description: "Nicolas Plachta, Universidade de Pennsylvania, EUA",
        from: "USA",
      },
      {
        day: "04-11-2025",
        time: "09h20 - 09h40",
        title: "AULA 02",
        speaker:
          "Expandindo nosso conhecimento em envelhecimento e rejuvenecimento ovariano",
        description: "Francesca Duncan, Universidade de Northwestern, EUA",
        from: "USA",
      },
      {
        day: "04-11-2025",
        time: "09h40 - 10h00",
        title: "AULA 03",
        speaker:
          "Por que nós ainda subestimamos a influencia masculina nos resultados de ART?",
        description: "Michael Eisenberg, Universidade de Stanford, EUA",
        from: "USA",
      },
      {
        time: "10h00 - 10h20",
        other: "Discussão",
      },
      {
        time: "10h20 - 10h50",
        other: "Intervalo",
      },
    ],
    laboratorio: [
      {
        day: "04-11-2025",
        time: "09h00 - 9h20",
        title: "ABERTURA",
        speaker: "Francesca Duncan",
        description: "Abertura do evento",
      },
    ],
  },
  "04-12-2025": {
    principal: [
      {
        dayType: "CONGRESSO • 2º DIA",
        day: "04-12-2025",
        time: "10h00",
        title: "Marketing Digital",
        speaker: "Gustavo Santana & Dia Nam Sekkar",
        description: "Abertura do evento",
      },
    ],
    laboratorio: [
      {
        day: "04-12-2025",
        time: "09h00 - 09h20",
        title: "ABERTURA",
        speaker: "Francesca Duncan",
        description: "Abertura do evento",
      },
    ],
  },
};
