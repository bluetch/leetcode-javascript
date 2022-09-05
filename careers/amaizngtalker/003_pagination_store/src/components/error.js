export const Error = () => {
  const handleLoad = () => {
    console.log("reload");
    window.location.reload();
  }
  return (
    <div className="container">
      <h1>Error</h1>
      <button onClick={() => handleLoad()}>reload</button>
    </div>
  )
}