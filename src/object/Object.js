const data = {
    "whois.verisign-grs.com": {
      "Domain Status": [
        "clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited",
        "clientTransferProhibited https://icann.org/epp#clientTransferProhibited",
        "clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited",
        "serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited",
        "serverTransferProhibited https://icann.org/epp#serverTransferProhibited",
        "serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited"
      ],
      "Name Server": [
        "NS1.GOOGLE.COM",
        "NS2.GOOGLE.COM",
        "NS3.GOOGLE.COM",
        "NS4.GOOGLE.COM"
      ],
      "Domain Name": "GOOGLE.COM",
      "Registry Domain ID": "2138514_DOMAIN_COM-VRSN",
      "Registrar WHOIS Server": "whois.markmonitor.com",
      "Registrar URL": "http://www.markmonitor.com",
      "Updated Date": "2019-09-09T15:39:04Z",
      "Created Date": "1997-09-15T04:00:00Z",
      "Expiry Date": "2028-09-14T04:00:00Z",
      "Registrar": "MarkMonitor Inc.",
      "Registrar IANA ID": "292",
      "Registrar Abuse Contact Email": "abusecomplaints@markmonitor.com",
      "Registrar Abuse Contact Phone": "+1.2086851750",
      "DNSSEC": "unsigned",
      "URL of the ICANN Whois Inaccuracy Complaint Form": "https://www.icann.org/wicf/",
      ">>> Last update of whois database": "2025-03-02T03:20:36Z <<<",
      "text": [
        "For more information on Whois status codes, please visit https://icann.org/epp",
        "",
        "NOTICE: The expiration date displayed in this record is the date the",
        "registrar's sponsorship of the domain name registration in the registry is",
        "currently set to expire. This date does not necessarily reflect the expiration",
        "date of the domain name registrant's agreement with the sponsoring",
        "registrar.  Users may consult the sponsoring registrar's Whois database to",
        "view the registrar's reported date of expiration for this registration.",
        "",
        "TERMS OF USE: You are not authorized to access or query our Whois",
        "database through the use of electronic processes that are high-volume and",
        "automated except as reasonably necessary to register domain names or",
        "modify existing registrations; the Data in VeriSign Global Registry",
        "Services' (\"VeriSign\") Whois database is provided by VeriSign for",
        "information purposes only, and to assist persons in obtaining information",
        "about or related to a domain name registration record. VeriSign does not",
        "guarantee its accuracy. By submitting a Whois query, you agree to abide",
        "by the following terms of use: You agree that you may use this Data only",
        "for lawful purposes and that under no circumstances will you use this Data",
        "to: (1) allow, enable, or otherwise support the transmission of mass",
        "unsolicited, commercial advertising or solicitations via e-mail, telephone,",
        "or facsimile; or (2) enable high volume, automated, electronic processes",
        "that apply to VeriSign (or its computer systems). The compilation,",
        "repackaging, dissemination or other use of this Data is expressly",
        "prohibited without the prior written consent of VeriSign. You agree not to",
        "use electronic processes that are automated and high-volume to access or",
        "query the Whois database except as reasonably necessary to register",
        "domain names or modify existing registrations. VeriSign reserves the right",
        "to restrict your access to the Whois database in its sole discretion to ensure",
        "operational stability.  VeriSign may restrict or terminate your access to the",
        "Whois database for failure to abide by these terms of use. VeriSign",
        "reserves the right to modify these terms at any time.",
        "",
        "The Registry database contains ONLY .COM, .NET, .EDU domains and",
        "Registrars."
      ]
    }
  }

  const nameServers = data["whois.verisign-grs.com"]["Name Server"];

  console.log(nameServers);
