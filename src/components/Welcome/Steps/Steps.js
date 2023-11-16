import style from "./Steps.module.css"

export const Steps = () => {
    return (
        <div className={style["div-steps"]}>
            <section className={style["section-title"]}>
                <h2>How It Works</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </section>

            <section className={style["section-steps"]}>
                <article>
                    <h4>Step 1</h4>
                    <h3>Make an appointment</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </article>
                <article>
                    <h4>Step 2</h4>
                    <h3>Go to the Doctor</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </article>
                <article>
                    <h4>Step 3</h4>
                    <h3>Go to the Pharmacist</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </article>
            </section>
        </div>
    )
}