import styles from "./contact.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import Container from "./shared/container";

function Contact() {
	return (
		<section
			className={styles.contact}
			id='contact'
		>
			<Container title='Kontakt'>
				<div className={styles.contact__container}>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
							cupiditate tenetur totam vero, molestiae culpa.
						</p>
					</div>
					<hr />
					<div className={styles.contact__box}>
						<form>
							<div className={styles.form__box}>
								<div className={styles.form}>
									<div className={styles.formInputTop}>
										<div className={styles.form__input__box}>
											<input
												type='text'
												id='name'
												name='name'
												required
											/>
											<span>Imie</span>
										</div>
										<div className={styles.form__input__box}>
											<input
												type='email'
												id='email'
												name='email'
												required
											/>
											<span>Email</span>
										</div>
									</div>
									<div className={styles.formInputTop}>
										<div className={styles.form__input__box}>
											<textarea
												name='message'
												id='message'
												required
												cols={30}
												rows={10}
											/>
											<span>Wiadomość</span>
										</div>
									</div>
									<div className={styles.formButton}>
										<button>Wyślij</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Container>
		</section>
	);
}
export default Contact;
