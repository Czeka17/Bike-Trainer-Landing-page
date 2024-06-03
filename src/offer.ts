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
		price: "99zł",
		description: [{ title: "4 tygodniowy plan treningowy", paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta, nemo esse quas incidunt illum ipsum natus. Similique, distinctio quam."
         }, { title: "aplikacja treningowa - Everfit", paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta, nemo esse quas incidunt illum ipsum natus. Similique, distinctio quam."
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
		price: "99zł",
        description: [{ title: "stałą opiekę nad Twoimi procesami", paragraph:"Otrzymujesz stałą opiekę nad Twoimi procesami treningowymi, cały plan jest spersonalizowany pod Twoje słabe jak i mocne strony"
         }, { title: "4 tygodniowy plan treningowy", paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta, nemo esse quas incidunt illum ipsum natus. Similique, distinctio quam."
        },{ title: "Stały kontakt", paragraph:"Stały kontakt, który nie kończy się po odstawieniu roweru na wieszak. Zawsze służę radą czy to w kwestiach sprzętowych czy treningowych"
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