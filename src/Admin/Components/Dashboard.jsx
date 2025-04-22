import React from 'react'
import AdminNaviagation from '../../Components/Navigation/AdminNavigation';
const Dashboard = () => {
  return (
    <>
     {/* <AdminNaviagation /> */}
     {/* <div className=''>
        <iframe
          title="House Sale Report"
          className="w-full h-screen"
          src="https://app.powerbi.com/view?r=eyJrIjoiNDYxMDE4NWUtMTQ4ZS00MTNhLWEzYzgtMWZiN2ExMmRjZWI1IiwidCI6IjFmYTYxNWJlLWNhODktNDhkOS1iMTU2LTk5YWY4NmFmODVlMSJ9&pageName=ReportSection"
          frameborder="0"
          allowFullScreen
        ></iframe>
      </div> */}
      <div>
      <iframe title="House Sale Report" width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiNDYxMDE4NWUtMTQ4ZS00MTNhLWEzYzgtMWZiN2ExMmRjZWI1IiwidCI6IjFmYTYxNWJlLWNhODktNDhkOS1iMTU2LTk5YWY4NmFmODVlMSJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
      </div>
    </>
  )
}

export default Dashboard
