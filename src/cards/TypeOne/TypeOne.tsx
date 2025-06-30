

export default function TypeOne({ item }: any) {
  return (
    <div style={{
      width: '200px',
      height: '300px',
      backgroundColor: "grey",
      display: 'grid',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '6px' }}>
        <button style={{ width: '85px', backgroundColor: 'black' }}>
          Yes
        </button>
        <button style={{ width: '85px', backgroundColor: 'black' }}>
          No
        </button>
      </div>
      <div style={{
        display: 'grid',
        placeItems: 'center',
        width: '100%',
        height: '120px'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '120px'
        }}>
          <div
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100px'
            }}
          ></div>
        </div>
      </div>
      <h1 style={{
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'normal',
        margin: 0,
      }}>{item.title}</h1>

      <button style={{
        width: '120px',
        display: 'block',
        marginLeft: 'auto',
      }}>Badge</button>
    </div>
  );
}
