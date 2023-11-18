const App = () => {
  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        maxWidth: "640px",
        padding: "20px",
      }}
    >
      <h1>👀 All-Seeing Eye</h1>
      Github:{" "}
      <a href="https://github.com/idootop/all-seeing-eye" target="_blank">
        https://github.com/idootop/all-seeing-eye
      </a>
      <p>Arbitrary File Read Vulnerability in Chrome Versions Prior to 116</p>
      <img
        src="demo.jpg"
        alt="demo"
        style={{
          width: "100%",
          borderRadius: "8px",
          boxShadow: "0 10px 20px rgba(0,0,0,.1)",
        }}
      />
      <h2>🔥 Example</h2>
      <p>
        👉 /api/hello?file=<strong>{"{file-path}"}</strong>&callback=
        <strong>{"{url}"}</strong>
      </p>
      <a
        href="https://all-seeing-eye-six.vercel.app/api/hello?path=file:///etc/passwd"
        target="_blank"
      >
        https://all-seeing-eye-six.vercel.app/api/hello?path=file:///etc/passwd
      </a>
      <h2>🐛 Bug Report</h2>
      <p>
        Insufficient validation of untrusted input in XML in Google Chrome prior
        to 116.0.5845.96 allowed a remote attacker to bypass file access
        restrictions via a crafted HTML page. (Chromium security severity:
        Medium)
      </p>
      <a
        href="https://bugs.chromium.org/p/chromium/issues/detail?id=1458911"
        target="_blank"
      >
        https://bugs.chromium.org/p/chromium/issues/detail?id=1458911
      </a>
      <h2>⚠️ Disclaimer</h2>
      <p>
        The contents of this repository, including code, demonstrations, and
        documentation (collectively referred to as "the material"), are provided
        for educational and informational purposes only. The material is
        intended to demonstrate the existence of an arbitrary file read
        vulnerability in Chrome browsers before version 116 and to inform the
        community and affected parties so that they may better protect against
        such vulnerabilities.
        <br />
        <br />
        Under no circumstances should the material be used for illegal,
        unethical, or malicious purposes. The creator of this repository does
        not condone or support any form of illegal or unethical activity. The
        responsibility for ensuring that any application of the material
        complies with applicable laws and regulations lies solely with the user.
        <br />
        <br />
        Any user who chooses to utilize the material in this repository does so
        at their own risk and discretion. The creator of this repository shall
        not be held liable for any direct or indirect damage caused by the use
        or misuse of the material. It is the user's responsibility to use the
        information provided here in a manner that is consistent with ethical
        guidelines and legal requirements.
        <br />
        <br />
        By accessing, viewing, or using the material in this repository, you
        acknowledge and agree that you have read and understood this disclaimer,
        and you accept all risks and responsibilities associated with the use of
        the material.
      </p>
    </div>
  );
};

export default App;
