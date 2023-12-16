import pdf from '../../curriculo.pdf';

function Curriculo() {
  return (
    <div>
      <iframe
        src={ pdf }
        width="100%"
        height="1000px"
        title="Iframe Example"
      />
    </div>
  );
}

export default Curriculo;
