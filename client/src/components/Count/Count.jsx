import "react";
import CountUp from "react-countup/build"
import "./Count.css"
const Count = () => {
 return(
    <section className="count-wrapper">
        <div className="count-container">
        <div className="status">
                    <div className="stat">
                        <span >
                            <CountUp start={1} end={1000} duration={4} style={{fontSize: "28px"}}/>
                            <span className="plus">+</span>
                        </span> <span className="statusName">
                        Доволни клиенти
                        </span>
                    </div>

                    <div className="stat">
                        <span>
                            <CountUp start={1} end={1000} duration={4} style={{fontSize: "28px"}}/>
                            <span className="plus">+</span>
                        </span> <span className="statusName">
                        Първокласни продукти
                        </span>
                    </div>

                    <div className="stat">
                        <span>
                            <CountUp end={100} duration={4} style={{fontSize: "28px"}}/>
                            <span className="plus">%</span>
                        </span> <span className="statusName">
                        Подход
                        </span>
                    </div>
                </div>
        </div>
    </section>
 )
}

export default Count;