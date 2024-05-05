import React from 'react'
import FaqScc from '../style/faq.module.css'

function AllCollapseExample() {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How do you define and calculate the Sharpe Ratio in the context of financial markets?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="text-center align-items-center">
                            <strong>הרכבת תיק מוגן:</strong> השקעה במגוון רחב של נכסים פיננסיים, כולל מניות,
                            אובליגציות, נדל"ן, וחוזים עתידיים. הפיזור הזה מפחית את הסיכונים הפרטיים ומגביר את הגנה
                            על ההון הכלכלי.<br />
                            <strong>שימוש בכלים פיננסיים מתקדמים:</strong> כגון אופציות פיננסיות או חוזים עתידיים
                            למניעת אובדן כסף במקרה של שיפור חריג בשוק.<br />
                            <strong>מחקר וניתוח כלכלי:</strong> עקיפה והבנה עמוקה של המציאות הכלכלית, כולל תחזיות
                            וניתוחים כלכליים מתקדמים, עשויים לסייע למנהלי ההון להבין סיכונים ולקבוע אסטרטגיות
                            מתקדמות במטרה להגן על ההון.<br />
                            <strong>הקפאת הון נכסים במקרה של סיכון קריסתי:</strong> במקרה של זיהום כלכלי נכון לקפוא
                            חלק מההון באמצעות מכירת נכסים, השקעה בכלים שונים או פעולות נוספות המתאימות להגנה מפני
                            חששות כלכליים.<br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What are futures contracts, and how do they function in the financial markets?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>
                            חוזים עתידיים הם הסכמים פיננסיים שמחייבים את הצדות לרכוש או למכור נכסים בעתיד, תוך קביעת
                            מחיר נקוב ומועד קביעים. הם משמשים להגנה על סיכונים כלכליים וככלי להפקת רווחים
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What is the difference between short selling and a put option?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="answer">
                            <strong>מכירה בחסר:</strong> הוא סוג של מכירת מניות בה אדם מוכר
                            מנייה שלא ברשותו (הוא ישאר חשוף להיאסר על פי דרישת הלקוח) ומתחייב להחזירה בעתיד. הגורם
                            המוכר רואה בזאת הזדמנות לרווח כאשר המניה ירדה במחיר.<br />
                            בניגוד לכך,
                            <strong>אופציית פוט</strong> היא אופציה שנקנית ונותנת לבעל האופציה (הקונה) הזכות, אך לא
                            החובה, למכור מנייה מסוימת במחיר קבוע (מחיר המקור) למוכר בסיום תקופה מסוימת. כלומר,
                            בעסקאות של פוט, הקונה מקבל זכות למכור, אך אין לו חובה לעשות זאת.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        What are the risks associated with investing in bonds, and how do they differ from stocks?
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p class="answer">כמו כל פעולה בשוק ההון, כך גם מכירת מניות ואופציות מכר מסוכנות
                            ודורשות ידע יסודי. כל השקעה בשוק ההון כוללת סיכונים של אובדן כסף, ולכן חשוב להבין את
                            המושגים והפעולות לפני שמתחילים להשקיע.</p>
                        <p class="answer">במכירת מניות, סיכונים עיקריים כוללים את היכולת להפסיד כסף כאשר מחירי
                            המניות עולים, כמו גם את החובה להחזיר את המניות למקורב הלקוח.</p>
                        <p class="answer">באופציות מכר, סיכונים עיקריים כוללים את אובדן הסכומים ששולם על האופציה
                            במידה והמחיר הנוכחי של המניה נמצא מתחת למחיר שנקבע באופציה. המכירת אופציות מכר עשויה
                            להיות רווחית במקרה של ירידת מחיר המניה מתחת למחיר הנקוב באופציה, אך יש סיכון של אובדן
                            במקרה של ירידה חלשה או אי ירידה בכלל במחיר המניה.</p>
                        <p class="answer">לפני ביצוע כל פעולה בשוק ההון, יש להשקיע זמן בלימוד ובהבנה עמוקה של השוק,
                            כללי ההשקעה והסיכונים הכלכליים השולטים. ידע זה מסייע להפחית את הסיכונים ומקנה למשקיעים
                            כלים לקבלת החלטות מושכלות.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Is every individual allowed to invest in hedge funds, or are there specific requirements or
                        restrictions for potential investors in hedge funds?
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p class="answer">תשובה: לצערנו, לא כל אדם רשאי להשקיע בקרנות גידור. לפי החוק הישראלי, השקעה
                            בקרנות גידור נדרשת לקוחות שכירים, השולטים בידע ובמומחיות הנדרשים להבנת הסיכונים
                            וההזדמנויות בשוק ההון.</p>
                        <p class="answer">לקוח כשיר הוא לקוח שעומד בדרישות של המוסד הפיננסי המפעיל את הקרן גידור.
                            המוסד ידרוש מהלקוח להצהיר על כשירותו ולהציג את ניסיון וידע בתחום ההשקעות.</p>
                        <p class="answer">המטרה מאחורי הדרישות הן להגן על הלקוח ולוודא שהוא מסוגל להבין את הסיכונים
                            והתנאים המשפטיים שמגוונים עם השקעה בקרן גידור.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllCollapseExample;