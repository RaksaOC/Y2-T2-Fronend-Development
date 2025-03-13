export default function Place({props}) {
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src={props.src} alt={props.alt} />
        <h3>{props.title}</h3>
      </button>
    </li>
  );
}
