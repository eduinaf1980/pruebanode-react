
const TableCollapseComponent = ({
  tabs,
  toggleTab,
  selectedTab,
  renderHeader,
}) => {
  return (
    <>
      {renderHeader}
      <div className="container-table">
        <ul className="nav nav-tabs">
          {tabs.map(({ label }, index) => (
            <li key={index} className="nav-item">
              <button
                className={selectedTab === index ? "nav-link active" : "nav-link"}
                onClick={() => toggleTab(index)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <div className="content-tabs">
          {tabs.map(({ component }, index) => (
            <div
              key={index}
              className={selectedTab === index ? "content-table  active-content" : "content-table"}
            >
              {component}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default TableCollapseComponent;