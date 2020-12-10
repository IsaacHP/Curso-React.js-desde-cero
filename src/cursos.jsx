import React from 'react'


 const Curso = () => (
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="https://edteam-media.s3.amazonaws.com/courses/medium/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg" alt="Curso JS" />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
            JavaScript desde cero (2020)
        </h3>
        <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
            <div className="circle img-container">
                <img src="https://edteam-media.s3.amazonaws.com/users/avatar/fe7d67c4-f2b2-4c93-82d5-56a83c9cd86f.jpg" alt="Profe Beto"/>
            </div>
            </div>
            <span className="small">Beto Quiroga</span>
        </div>
        </div>
        <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team/cursos/javascript">$ 20USD</a>
        </div>
    </div>
    </article>
 )

 export default Curso