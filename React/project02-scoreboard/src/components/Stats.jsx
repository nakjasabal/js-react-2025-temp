export default function Stats(props) {  
  let playersCount = props.playerData.length;

  let totalPoint = props.playerData.reduce((prev, curr) => {
    prev += curr.score;
    return prev;
  }, 0);

  return (<>
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{playersCount}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalPoint}</td>
      </tr>
      </tbody>
    </table>    
  </>);
}