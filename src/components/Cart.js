export default function Cart() {
  return (
    <div className="bg-light p-3">
      <table className="table align-middle">
        <tbody>
          <tr>
            <td>
              <a href="#">x</a>
            </td>
            <td>
              <img
                src="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
                className="table-image"
                alt="..."
              />
            </td>
            <td>
              全蔬食健康餐
              <br />
              <small className="text-muted">NT $220</small>
            </td>
            <td>
              <select name="" id="" className="form-select"></select>
            </td>
            <td className="text-end">NT $440</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="text-end">
              總金額 NT $440
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
