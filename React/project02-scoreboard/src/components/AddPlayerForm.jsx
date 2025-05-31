export default function AddPlayerForm(props) {
  return (<>
    <form className="form" 
      onSubmit={(e)=>{
        e.preventDefault();
        if(e.target.player.value===''){
          alert('이름을 입력하세요.');
          e.target.player.focus();
          return;
        }
        let playerName = e.target.player.value;
        props.onAddPlayer(playerName);
        e.target.player.value = '';
      }} 
    >
      <input type="text" name="player" minLength="10" className="input" 
        placeholder="이름을 추가하세요" />
      <input type="submit" className="input" value="Add Player" />
    </form>
  </>);
}