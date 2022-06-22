const BookDeleteView = () => {
  return (
    <div className={"container"}>
      <div className={"row"}>
        <h1>Do you want delete this book?</h1>
        <form>
          <button type="button" className="btn btn-primary">
            Accept
          </button>
          <button type="button" className="btn btn-secondary ms-3">
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookDeleteView
