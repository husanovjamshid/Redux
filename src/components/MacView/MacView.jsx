export const MacView = () => {
  return (
    <>
      <div className="w-50 mx-auto p-5 shadow-lg mt-5 rounded-3">
        <h2 className="text-center mb-3">Mac Shop</h2>
        <p className="text-center h4">Mac count: 0</p>

        <button className="btn btn-primary d-block mx-auto">Buy</button>
        <div className="input-group mt-4">
          <input
            className="form-control"
            type="text"
            placeholder="Add count..."
          />
          <button className="btn btn-primary">
            Add <span className="text-warning">(12)</span> Mac
          </button>
        </div>
      </div>
    </>
  );
};
