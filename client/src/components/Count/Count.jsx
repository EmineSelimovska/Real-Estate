import "react";
import CountUp from "react-countup/build"
import "./Count.css"
const Count = () => {
 return(
    <section className="count-wrapper">
        <div className="count-container">
        <div className="status">
                    <div className="stat">
                        <span>
                            <CountUp start={1} end={1000} duration={4}/>
                            <span>+</span>
                        </span> <span>
                        Доволни клиенти
                        </span>
                    </div>

                    <div className="stat">
                        <span>
                            <CountUp start={1} end={1000} duration={4}/>
                            <span>+</span>
                        </span> <span>
                        Първокласни продукти
                        </span>
                    </div>

                    <div className="stat">
                        <span>
                            <CountUp end={100} duration={4}/>
                            <span>%</span>
                        </span> <span>
                        Подход
                        </span>
                    </div>
                </div>
        </div>
    </section>
 )
}

export default Count;