import styles from "./contact.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import Container from "../shared/container";
import emailjs from "@emailjs/browser";
import Modal from "./contactModal";
interface FormData {
	name: string;
	email: string;
	message: string;
}
function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});
	const [showModal, setShowModal] = useState(false);
	const [canCloseModal, setCanCloseModal] = useState(false);
	const [modalText, setModalText] = useState({ title: "Wysyłanie...", paragraph: "Proszę czekać" });

	function closeModalHandler(){
		setShowModal(false)
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		setShowModal(true);
		e.preventDefault();
		emailjs.init(`${process.env.REACT_APP_EMAIL_KEY}`);
		const templateParams = {
			from_name: formData.name,
			from_email: formData.email,
			message: formData.message,
		};
		if (
			formData.name === "" ||
			formData.email === "" ||
			!formData.email.includes("@") ||
			formData.message === ""
		) {
			setModalText({ title: "Błąd!", paragraph: "Niepoprawne dane!" });
			setShowModal(true);
		} else {
			try {
				emailjs
					.send(
						`${process.env.REACT_APP_SERVICE_KEY}`,
						`${process.env.REACT_APP_TEMPLATE_KEY}`,
						templateParams
					)
					.then(() => {
						setModalText({
							title: "Udało się!",
							paragraph: "Email został wysłany! odpowiem na niego wkrótce",
						});
						setShowModal(true);
						setFormData({ name: "", email: "", message: "" });
					})
					.catch(() => {
						setModalText({
							title: "Oj...",
							paragraph: "Coś poszło nie tak, spróbuj ponownie później!",
						});
						setShowModal(true);
						setFormData({ name: "", email: "", message: "" });
					});
			} catch (error) {
				setModalText({
					title: "Oj...",
					paragraph: "Coś poszło nie tak, spróbuj ponownie później!",
				});
				setShowModal(false);
				setFormData({ name: "", email: "", message: "" });
			}
		}
	};
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<section
			className={styles.contact}
			id='contact'
		>
			<Container title='Kontakt'>
				<div className={styles.contact__container} data-aos="fade-up" data-aos-offset="100"
     data-aos-anchor-placement="top-bottom">
					<div>
						<p>
						Jestem tu dla Ciebie!<br/> Wypełnij formularz kontaktowy poniżej, abym mógł Cię lepiej poznać i pomóc w osiągnięciu Twoich celów rowerowych.
						</p>
					</div>
					<hr />
					<div className={styles.contact__box} >
						<form onSubmit={handleSubmit}>
							<div className={styles.form__box}>
								<div className={styles.form}>
									<div className={styles.form__input__top}>
										<div className={styles.form__input__box}>
											<input
												type='text'
												id='name'
												name='name'
												value={formData.name}
												onChange={handleChange}
												required
											/>
											<span>Imie</span>
										</div>
										<div className={styles.form__input__box}>
											<input
												type='email'
												id='email'
												name='email'
												value={formData.email}
												onChange={handleChange}
												required
											/>
											<span>Email</span>
										</div>
									</div>
									<div className={styles.form__input__top}>
										<div className={styles.form__input__box}>
											<textarea
												name='message'
												id='message'
												value={formData.message}
												onChange={handleChange}
												required
												cols={30}
												rows={10}
											/>
											<span>Wiadomość</span>
										</div>
									</div>
									<div className={styles.form__button}>
										<button>Wyślij</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Container>
			{showModal && <Modal title={modalText.title} message={modalText.paragraph} closeModal={closeModalHandler}/>}
		</section>
	);
}
export default Contact;
