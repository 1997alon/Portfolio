function Human({name, age}){
    return (
        <section>
            <h2>my name is {name}</h2>
            <p>and my age is {age}</p>
          
        </section>
    );
}

export default function group(){
    return (
        <section>
            <Human name="Alon" age={19}/>
            <Human name="y" age={20}/>
            <Human name="v" age={21}/>
        </section>
    );
}