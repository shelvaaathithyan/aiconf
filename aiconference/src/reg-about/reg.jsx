import React from 'react';

const Reg = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#023e8a', color: 'white', maxWidth: '1000px', margin: 'auto', lineHeight: '1.6' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem',fontFamily: 'Georgia, serif' }}>PAPER SUBMISSION</h2>
<ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
  <li style={{ textAlign: 'left' }}>
    <strong>Submission Guidelines:</strong> We invite authors to submit original research papers, case studies, and review articles relevant to the conference themes. Submissions must adhere to the following guidelines:
  </li>
  <li style={{ textAlign: 'left', fontWeight: 'bold', color: 'white' }}>
    Accepted full papers [12–15 pages]
  </li>
  <li style={{ textAlign: 'left', fontWeight: 'bold', color: 'white' }}>
    Accepted short papers [6–8 pages]
  </li>
  <li style={{ textAlign: 'left' }}>
    Selected registered papers will be published in Scopus indexed proceedings and journals.
  </li>
  <li style={{ textAlign: 'left' }}>
    To submit a paper in CMT (Conference Management Toolkit)
  </li>
</ul>
<h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem',fontFamily: 'Georgia, serif'}}>IMPORTANT DATES</h2>

        <table style={{
          width: '70%',
          borderCollapse: 'collapse',
          border: '3px solid white',
          borderRadius: '1rem',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          color: '#000',
          alignItems: 'center',
          margin: 'auto'
        }}>
          <tbody>
            {[
              ['Abstract Submission Deadline', '16.06.2025'],
              ['Full Paper Submission', '14.07.2025'],
              ['Notification of Acceptance', '1.10.2025'],
              ['Camera-Ready Paper Submission', '15.10.2025'],
              ['Registration Deadline', '31.10.2025']
            ].map(([label, date], idx) => (
              <tr key={idx} style={{ background: 'linear-gradient(to right, #001f54, #023e8a)', color: 'white' }}>
                <td style={{ padding: '1.2rem', border: '3px solid white', fontWeight: 'bold',textAlign:'left' }}>{label}</td>
                <td style={{ padding: '1.2rem', border: '3px solid white', textAlign: 'center', fontWeight: 'bold' }}>{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>



      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem',fontFamily: 'Georgia, serif' }}>REGISTRATION DETAILS</h2>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
        <li style={{ textAlign: 'left' }}>All accepted papers must be registered</li>
        <li style={{ textAlign: 'left' }}>At least one author must attend the conference to present the paper</li>
        <li style={{ textAlign: 'left' }}>Registration includes conference kit, lunch, and access to all sessions</li>
      </ul>

      <p style={{ marginBottom: '1rem', fontWeight: '500' }}>The registration fee for the conference is as follows:</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '90%',
          borderCollapse: 'collapse',
          borderRadius: '30px',
          overflow: 'hidden',
          marginBottom: '2rem',
          border: '3px solid white',
          backgroundColor: '#023e8a',
          color: 'white',
          alignItems: 'center',
          margin: 'auto',
        }}>
          <thead>
            <tr style={{ background: 'linear-gradient(to right, #001f54, #023e8a)', color: 'white' }}>
              <th style={{ padding: '1rem', border: '3px solid white', textAlign: 'center' }}>CATEGORY</th>
              <th style={{ padding: '1rem', border: '3px solid white',  textAlign: 'center' }}>INDIAN DELEGATES</th>
              <th style={{ padding: '1rem', border: '3px solid white', textAlign: 'center' }}>FOREIGN DELEGATES</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#fff', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Academician, Research Scholar</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}> ₹ 10,000</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>US $ 125</td>
            </tr>
            <tr style={{ backgroundColor: '#f0f0f0', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Industry person</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}> ₹ 12,000</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>US $ 140</td>
            </tr>
            <tr style={{ backgroundColor: '#fff', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Attendees</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}> ₹ 3,000</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>US $ 75</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
        <strong>Note:</strong> Registration fee inclusive of 18% GST.
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem',fontFamily: 'Georgia, serif' }}>Payment Type: Internet Banking</h2>
      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{
          width: '90%',
          borderCollapse: 'collapse',
          border: '3px solid white',
          borderRadius: '1rem',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          color: '#000',
          alignItems: 'center',
          margin: 'auto',
        }}>
          <thead>
  <tr style={{ background: 'linear-gradient(to right, #001f54, #023e8a)' }}>
    <th colSpan={2} style={{ padding: '1rem', textAlign: 'center', color: 'white', fontSize: '1.5rem', border: '3px solid white' }}>
      Payment Details
    </th>
  </tr>

</thead>
          <tbody>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Account Number</td>
              <td style={{ padding: '1rem', border: '3px solid white',fontWeight: 500 }}>1481267367</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Name of the Beneficiary</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>PSG Center for Nonformal and Continuing Education (PSG CNCE)</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Address</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Peelamedu, Coimbatore - 641004</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Name of the Bank</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Central Bank of India</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Account Type</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Savings</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>IFSC Code</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>CBIN0280913</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Swift Code</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>CBININBBOSB</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="#"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#001f54',
            color: 'white',
            fontWeight: '500',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          Click here for Registration
        </a>
      </div>
    </div>
  );
};

export default Reg;
