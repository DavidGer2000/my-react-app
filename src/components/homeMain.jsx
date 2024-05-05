import React from 'react'
import HomeCss from '../style/Homepage.module.css'

const HomeMain = () => {
  return (
    <>
    <main className="container-fluid bg-light text-dark">
        <div className={`${HomeCss.container} container p-2`}>
            <div className="m-auto d-flex justify-content-center text-center">
                <h2 className={`${HomeCss.logoName}`}>HEDGER CAPITAL</h2>
            </div>
            <div className={`${HomeCss.pabaout}`}>
                <p className={`${HomeCss.p} fw-normal`}>
                    באדגר קפיטל , אנו גאים להדגיש את היכולת הייחודית שלנו להשיג תשואה מרבית בכל מצב
                    שוק. נכונות שלנו להקציב ולהשקיע בפרויקטים חדשניים מספקת יתרון יחודי, המאפשר לנו להרוויח במגוון תנאי
                    שוק.
                </p>
                <br/>
                <p className={`${HomeCss.p} fw-normal`}>
                    הקרן מתעקשת לשמש כגוף יעיל ומתקדם שמכוון להפיק תשואה מתמידה למשקיעים שלנו. יכולתנו להסתגל למגמות
                    בשוק ולהזהות במוקד את ההזדמנויות הפוטנציאליות הופכת אותנו לשותפים מבוקר לערב בהצלחת הפרויקטים שלנו.

                    בהתאם להבנה מעמיקה של דרישות השוק, אנו יכולים לספק נכסים ולהשיג תשואה גבוהה בכל שלב של התהליך
                    ההשקעותי.
                </p>
                <br/>
                <p className={`${HomeCss.p} fw-normal`}>
                    באמצעות שימוש במכשירים פיננסיים חכמים, אנו מקנים למשקיעים שלנו יתרון מרבי בתהליך ההשקעה, מאפשרים
                    ניהול אופטימלי ומגמישות מקסימלית. נכונות שלנו להשתמש בכלים מתקדמים הופכת אותנו לשותפים אמינים
                    ומתקדמים לכל משקיע שמחפש להשקיע בעתיד.

                    בקרן גידור, אנו לא רק רואים עבודה כתכלית בפני עצמה, אלא ככלי להשגת תשואה מרבית בכל תנאי שוק. אנו
                    מתכוונים להמשיך ולהרות ערך מתמיד למשקיעים שלנו באמצעות השקעות מדויקות וחכמות.
                </p>
                <br/>
                <p className={`${HomeCss.p} fw-normal`}>
                    המודל שלנו משתמש בנתונים אקטואליים ובניתוח שוק עדכני, מאפשר לנו לקבל החלטות מבוססות על
                    מידע רשות השוק.

                    אנו מחויבים להציע למשקיעים שלנו תמיכה מקצועית ואישית, מתוך הבנה מעמיקה בדרישות ובתחומי התחום. עם
                    שילוב מערכות ידע וטכנולוגיה פיננסית מתקדמת, אנו יכולים להבטיח כי כל ההחלטה השקעתית תיעשה בצורה
                    מושכלת ומתוך שקיפות מוחלטת.
                </p>
                <br/>
            </div>
        </div>
    </main>
    </>
  )
}

export default HomeMain