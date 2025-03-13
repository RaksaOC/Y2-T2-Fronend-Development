import Card from './Card';
const Container=({subject})=>{
    const capitalizeFirstChar = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return(
        <main className="scores-container">
        <div className="scores">
          <h1>{capitalizeFirstChar(subject)} Course</h1>
          <Card subjectData={subject}/>
        </div>
      </main>
    )
}
export default Container;