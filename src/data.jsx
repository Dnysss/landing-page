//import icons
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

//import images
import AboutImg from "../src/assets/img/about.svg";
import AppImg from "../src/assets/img/app.svg";

import Avatar1Img from "../src/assets/img/testimonials/avatar1.png";
import Avatar2Img from "../src/assets/img/testimonials/avatar2.png";
import Avatar3Img from "../src/assets/img/testimonials/avatar3.png";

import Freature1Img from "../src/assets/img/features/feature1.svg";
import Freature2Img from "../src/assets/img/features/feature2.svg";
import Freature3Img from "../src/assets/img/features/feature3.svg";
import Freature4Img from "../src/assets/img/features/feature4.svg";
import Feature1BgImg from "../src/assets/img/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/img/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/img/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/img/features/feature4_bg.png";

export const navigationData = [
    {
        name: "Ride",
        href: "#",
    },
    {
        name: "About",
        href: "#",
    },
    {
        name: "Features",
        href: "#",
    },
    {
        name: "Signup",
        href: "#",
    },
];

export const appData = {
    title: `Viaje com tranquilidade com o nosso app`,
    subtitle:
        "O SeriDriver ajuda você a encontrar a viagem ideal conforme seu critério de estilo, espaço ou economia.",
    btnText: "Começar",
    image: AppImg,
};

export const aboutData = {
    image: AboutImg,
    title: "Descubra um pouco mais sobre nós.",
    subtitle:
        "O SeriDriver permite que usuários solicitem facilmente serviços de transporte particular usando seus smartphones.",
};

export const featureData = {
    title: "Alguns serviços que oferecemos",
    subtitle:
        "Com o nosso aplicativo, ficou muito mais simples viajar, Baixe agora mesmo!",
    list: [
        {
            image: Freature1Img,
            bgImage: Feature1BgImg,
            title: "Envie suas encomendas",
            description:
                "No nosso aplicativo, você poderá enviar encomendas de forma fácil e segura",
            linkText: "Saiba mais",
            delay: "400",
        },
        {
            image: Freature2Img,
            bgImage: Feature2BgImg,
            title: "Veja a estimativa de preço",
            description:
                "Com o SeriDrive, você tem uma ideia de quanto irá pagar antes de solicitar a viagem",
            linkText: "Saiba mais",
            delay: "400",
        },
        {
            image: Freature3Img,
            bgImage: Feature3BgImg,
            title: "Viaje com segurança",
            description: "A segurança de cada viagem é a nossa prioridade",
            linkText: "Saiba mais",
            delay: "400",
        },
        {
            image: Freature4Img,
            bgImage: Feature4BgImg,
            title: "Compartilhe sua viagem",
            description:
                "Deixe seus amigo e familiares tranquilos compartilhando a localização e os status da sua viagem",
            linkText: "Saiba mais",
            delay: "400",
        },
    ],
};

export const testimonialsData = [
    {
        image: Avatar1Img,
        name: "Chico",
        web: "francisco@gmail.com",
        message:
            "Fantástico! Usei o aplicativo para visitar um amigo que mora em um sítio próximo da região, fui bem atendido e cheguei ao local com segurança.",
        delay: "300",
    },
    {
        image: Avatar2Img,
        name: "Josefa",
        web: "josefa@gmail.com",
        message:
            "Ótimo! Sou idosa e uso bastante o aplicativo para me locomover dentro cidade.",
        delay: "600",
    },
    {
        image: Avatar3Img,
        name: "Zé",
        web: "jose@gmail.com",
        message:
            "Bem prático! através do aplicativo pude enviar algumas das minhas mercadorias para um cliente de outra ciadade.",
        delay: "900",
    },
];

export const ctaData = {
    title: "Contate-nos por aqui.",
    subtitle: "Experimente gratuitamente nossos recursos!",
    btnText1: "Saiba mais",
    btnText2: "Request Demo",
};

export const footerData = {
    logo: 'SeriDriver',
    address:
        "Rua Bitônia Salustino, n°13, Currais Novos, Rio Grande do Norte/RN",
    email: "infoseridriver@gmail.project",
    phone: "+55 (084) 92222-2222",
    list1: [
        {
            name: "Profile",
            href: "#",
        },
        {
            name: "Features",
            href: "#",
        },
        {
            name: "Careers",
            href: "#",
        },
        {
            name: "DW News",
            href: "#",
        },
    ],
    list2: [
        {
            name: "Support",
            href: "#",
        },
        {
            name: "Sign Up",
            href: "#",
        },
        {
            name: "Guide",
            href: "#",
        },
        {
            name: "Reports",
            href: "#",
        },
        {
            name: "Q & A",
            href: "#",
        },
    ],
    socialList: [
        {
            icon: <FaYoutube />,
            href: "#",
        },
        {
            icon: <FaInstagram />,
            href: "#",
        },
        {
            icon: <FaGithub />,
            href: "#",
        },
    ],
};

export const copyrightData = {
    text: "© 2023 SeriDriver Technologies Inc. All rights reserved.",
    icon: <BsChatDotsFill />,
};
