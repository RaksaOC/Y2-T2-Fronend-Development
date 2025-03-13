import { JAVA_RESULTS } from "./../data";
import { ENGLISH_RESULTS } from "./../data";
import { HTML_RESULTS } from "./../data";
import { PYTHON_RESULTS } from "./../data";
const Card = ({ subjectData }) => {
  const data = () => {
    switch (subjectData) {
      case "java":
        return <>{wrapper(JAVA_RESULTS)}</>;
      case "python":
        return <>{wrapper(PYTHON_RESULTS)}</>;
      case "english":
        return <>{wrapper(ENGLISH_RESULTS)}</>;
      case "html":
        return <>{wrapper(HTML_RESULTS)}</>;
    }
  };
  const subjectRender = (sub) => {
    return sub.map((e, i) => {
      return (
        <tbody key={i}>
          <tr>
            <td>{e.firstName}</td>
            <td>{e.lastName}</td>
            <td style={e.score < 50 ? { color: "orange" } : { color: "gray" }}>
              {e.score}
            </td>
          </tr>
        </tbody>
      );
    });
  };
  const wrapper = (subject) => {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Score</th>
            </tr>
          </thead>
          {subjectRender(subject)}
        </table>
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom:"10px",
            marginTop:"10px"
          }}
        >
          <div style={{display:"flex", flexDirection:"column"}}>
            <div>Max</div>
            <div style={{fontSize:"1.75rem"}}>
              {
                subject.reduce((acc, curr) =>
                  curr.score < acc.score ? acc : curr
                ).score
              }
            </div>
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <div>Min</div>
            <div style={{fontSize:"1.75rem"}}>
              {
                subject.reduce((acc, curr) =>
                  curr.score > acc.score ? acc : curr
                ).score
              }
            </div>
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <div>Average</div>
            <div style={{fontSize:"1.75rem"}}>
              {(
                subject.reduce((acc, curr) => acc + curr.score, 0) /
                subject.length
              ).toFixed(2)}
            </div>
          </div>
        </div>
      </>
    );
  };
  return <>{data()}</>;
};
export default Card;
