type Description = {
    title: string;
    paragraph: string;
};

type OfferType = {
    title: string;
    list: string[];
    price: string;
    description: Description[];
	available:boolean
};
export const Offers: OfferType[] = [
	{
		title: "Skalowalny plan treningowy",
		list: [
			"✅ 4 tygodniowy plan treningowy",
			"✅ Treningi wydolnościowe na rowerze i/lub treningi siłowe w domu/na siłowni",
			"✅ Dostęp do aplikacji treningowej (Everfit)",
			"✅ Darmowa konsultacja",
		],
		price: "60zł / Plan",
		description: [{ title: "4 tygodniowy plan treningowy", paragraph:"Profesjonalnie opracowany plan uwzględnia Twoje indywidualne potrzeby, poziom zaawansowania oraz cele, co minimalizuje ryzyko kontuzji i maksymalizuje wyniki."
         }, { title: "aplikacja treningowa - Everfit", paragraph:"Dzięki funkcjom monitorowania postępów oraz motywacyjnym narzędziom aplikacji, użytkownicy mogą osiągać lepsze rezultaty fitnessu, bez względu na ich poziom zaawansowania czy cele treningowe."
        },{ title: "Darmowa konsultacja", paragraph:"Darmowa konsultacja przed rozpoczęciem planu abyśmy mogli dostosować obciążenie do Twojego stopnia zaawansowania"
    }],
	available:true
	},
	{
		title: "Indywidualna opieka trenerska",
		list: [
			"✅ Stała opieka nad Twoimi procesami treningowymi",
			"✅ Pomoc w dobrze sprzętu rowerowego",
			"✅ Dodatkowy trening mobility",
			"✅ Spersonalizowana rozgrzewka przed treningami i/lub zawodami",
			"✅ Wsparcie na temat odżywiania",
			"✅ Stały kontakt",
		],
		price: "100zł / Miesiąc",
        description: [{ title: "Stała opieka nad Twoimi procesami", paragraph:"Jest to kluczowy element skutecznego zarządzania działaniami, zapewniający ciągłość, efektywność i optymalizację działań w długoterminowej perspektywie."
         }, { title: "Pomoc w dobrze sprzętu rowerowego", paragraph:"Dzięki indywidualnemu doradztwu możesz znaleźć odpowiednią ramę, komponenty i akcesoria dostosowane do Twoich preferencji, umiejętności i celów, co wpłynie pozytywnie na Twoje doświadczenia podczas jazdy i osiągnięcie lepszych rezultatów sportowych."
        },{ title: "Wsparcie na temat odżywiania", paragraph:"Poprzez indywidualne konsultacje pomoge Ci uzyskać spersonalizowane porady żywieniowe, plany posiłków i wsparcie w zmianie nawyków żywieniowych, co pozwala osiągnąć lepszą kondycję fizyczną, wydajność sportową oraz lepsze samopoczucie ogólne."
    }],
	available:true
	},
	{
		title: "Trening rowerowy 1:1",
		list: ["Dostępne wkrótce"],
		price: "Wkrótce",
        description: [{ title: "4 tygodniowy plan treningowy", paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta, nemo esse quas incidunt illum ipsum natus. Similique, distinctio quam."
         }, { title: "4 tygodniowy plan treningowy", paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta, nemo esse quas incidunt illum ipsum natus. Similique, distinctio quam."
        },{ title: "4 tygodniowy plan treningowy", paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta, nemo esse quas incidunt illum ipsum natus. Similique, distinctio quam."
    }],
		available:false
	},
];