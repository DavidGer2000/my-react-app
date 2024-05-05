import React from 'react'
import AboutCss from '../style/abaout.module.css'

const AbaoutMain = () => {
    return (
        <>
            <main className={`${AboutCss.main} container-fluid text-emphasis-light`}>
                <div className={`${AboutCss.container} container bg-light`}>
                    <div className={`${AboutCss.inform_div} m-4`}>
                        <h2 className={AboutCss.unicText}>our inspiration's people</h2>
                    </div>
                    <div className="row justify-content-evenly">
                        <div className={`${AboutCss.box} box col-md-3 col-xsm-6 col-sm-4`}><a href="https://en.wikipedia.org/wiki/John_Gutfreund" target="_blank"><img className={`${AboutCss.prophshional}`} src="./gallery/gutfriend.webp" /></a>
                            <h2>John Gutfreund
                            </h2>
                            <p className={AboutCss.insprator}>
                                John Gutfreund, a prominent banker, led Salomon Brothers in the '80s. Key in "Liar's Poker" era,
                                known for decisive leadership. Born September 4, 1929; passed away March 9, 2016.</p>
                        </div>
                        <div className={`${AboutCss.box} box col-md-3 col-xsm-6 col-sm-4`}><a href="https://michaellewiswrites.com/" target="_blank"><img className={`${AboutCss.prophshional}`} src="./gallery/michaelluis.avif" /></a>
                            <h2>michael lewis</h2>
                            <p className={AboutCss.insprator}>
                                Michael Lewis, a prominent American author, rose to fame with "Liar's Poker" (1989), offering
                                insights into his time as a trader at Salomon Brothers during the '80s financial scene.</p>
                        </div>
                        <div className={`${AboutCss.box} box col-md-3 col-xsm-6 col-sm-4`}><a
                            href="https://www.independent.co.uk/news/world/americas/michael-burry-stock-market-big-short-b2395947.html"
                            target="_blank"><img className={`${AboutCss.prophshional}`} src="./gallery/welshorter.webp" /></a>
                            <h2>Michael Burry</h2>
                            <p className={AboutCss.insprator}>
                                Michael Burry, American investor, foresaw the 2008 crisis, gaining fame for bets against housing
                                in
                                "The Big Short." His strategy involves deep analysis and contrarian thinking.</p>
                        </div>
                    </div>
                </div>

                <div className={`${AboutCss.container} container d-flex bg-secondary-subtle justify-content-center`}>
                    <div className={`${AboutCss.inform_div} mb-2`}>
                        <h2>ההצלחות שלנו</h2>
                    </div>

                    <div className={`${AboutCss.Divtable}`}>
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">גייסנו </th>
                                    <th scope="col">סה"כ נכסים מנוהלים</th>
                                    <th scope="col">סה"כ תשואה שנתית</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">2020</th>
                                    <td>141M</td>
                                    <td>11.1B</td>
                                    <td>24%</td>
                                </tr>
                                <tr>
                                    <th scope="row">2021</th>
                                    <td>119M</td>
                                    <td>12.5B</td>
                                    <td>11%</td>
                                </tr>
                                <tr>
                                    <th scope="row">2022</th>
                                    <td>165M</td>
                                    <td>16B</td>
                                    <td>30%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={`${AboutCss.container} container bg-white`}>
                    <div className={`${AboutCss.inform_div} m-4`}>
                        <h2>השותפים שלנו</h2>
                    </div>
                    <div className={`${AboutCss.relations} row justify-content-between`}>
                        <div className={`${AboutCss.box2} col-sm-3`}><a className='d-flex justify-content-center' href="https://olui2.fs.ml.com/" target="_blank"><img
                            className="d-block relation w-100 h-100"
                            src="./gallery/merilinch.png"
                            alt="first slide"
                        /></a></div>
                        <div className={`${AboutCss.box2} col-sm-3`}><a className='d-flex justify-content-center' href="https://www.morganstanley.com/" target="_blank"><img
                            className="d-block relation w-100 h-100"
                            src="./gallery/morganstanley.png"
                            alt="first slide"
                        /></a></div>
                        <div className={`${AboutCss.box2} col-sm-3`}><a className='d-flex justify-content-center' href="https://www.goldmansachs.com/" target="_blank"><img
                            className="d-block relation w-100 h-100"
                            src="./gallery/goldman.png"
                            alt="first slide"
                        /></a></div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default AbaoutMain