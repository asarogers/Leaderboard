export default function Leaderboard(props) {
//when you accept props this way, the name inside the brackets has to be the same as the name passed from where the component was called.
    const {competitors } = props

  return (
    <div className="App">
      <table className="employee-container">
        <tbody>
          {/* Now by using the map function, we are able to dynamically render competitors to the screen*/}
          {competitors.map((competitor, i) => {
            return (
              <>
                <tr key={i}>
                  {/* We are displaying the competitor's name here*/}
                  <th>{competitor.name}</th>
                  {/* displaying the competitor's points here*/}
                  <th>{competitor.points}</th>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
