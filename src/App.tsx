import { Design } from "./_internal/Design";
import "./App.css";
import { useEffect, useState } from "react";
import { getItems } from "./_internal/api";
import TypeOne from "./cards/TypeOne/TypeOne";
/**
 * # Intructions:
 *
 * Feel free to use whatever tool you want. AI included.
 *
 * Get a working copy at: https://github.com/tiagobnobrega/react-task.
 *
 * # Requirements:
 *
 * Implemented a paginated view that will display the cards on a grid.
 *
 * ## Cards
 *
 * Build components to present both cards described in the design reference.
 *
 * The cards should have a size of 200px x 300px.
 *
 * The images on the card Type:1 should have 120px x 120px.
 *
 * Images should be centered covering the whole 120px square, cropped without distortions.
 *
 * Each type of item should be rendered by the correct type of card:
 *
 * - Items with type=1 should be rendered using card Type: 1
 * - Items with type=2 should be rendered using card Type: 2
 *
 * ## Themes
 *
 * Implement multiple themes.
 *
 * The theme `obsidian` has a black #000 background on elements.
 *
 * Theme `snow` has a grey #EAECEF background.
 *
 * ## Pagination
 *
 * Implement any type of pagination, including but not required infinite scrolling.
 *
 * If page-based pagination is implemented, each page should have at most 20 items.
 *
 * Loading states need to be considered.
 *
 * There are no requirements for any loading state as it will depend on the solution
 * It could be as simple as a "Loading..." text displaying on a div or a button.
 *
 * ## Data
 *
 * The data to be rendered is exposed through a mock API call using the `getItems` function.
 *
 * This function simulates the request delay and accepts `pageSize` and `page` arguments.
 *
 * The API returns the fetched items in the `items`.
 *
 * Information about pagination is returned in the `pagination` prop.
 *
 */

const initialPaginationParams = {
    "currentPage": 1,
    "pageSize": 5,
    "totalItems": 1000,
    "totalPages": 200,
    "hasNextPage": true
}

export default function App() {
  const [items, setItems] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>(initialPaginationParams);

  useEffect(() => {
    const logItems = async () => {
      const response = await getItems({
        page: pagination.currentPage,
        pageSize: pagination.pageSize
      });
      setItems(response.items);
      setPagination(response.pagination);
    };
    logItems().catch((e) => console.error(e));
  }, [pagination.pageSize, pagination.currentPage]);

  return (
    <div className="App">
      <h1 className="centered">Design System Card Component</h1>
      <h2 className="centered">Design Reference</h2>
      <div className="centered">
        <Design />
      </div>
      <h2 className="centered">Components:</h2>
      <main style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 120px)', gap: '100px', }}>
        {items?.length > 0 && (
        items.map((item) => {
          return (
            <TypeOne item={item} />
          )
        })
      )}
      </main>
      <span>{pagination.totalPages}</span>
      <button disabled={!pagination.hasNextPage} onClick={() => { setPagination({ ...pagination, currentPage: pagination.currentPage + 1 }) }}>Next Page</button>
    </div>
  );
}
