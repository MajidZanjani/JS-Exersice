function updateAccounts(accounts, logons) {
  logons.Logons.forEach((logon) => {
    var foundAccount = accounts.Accounts.find(
      (account) => account.Id === logon.Id
    );

    if (foundAccount) {
      if (!foundAccount.NameDate) {
        foundAccount.NameDate = foundAccount.LastLogon;
      }

      foundAccount.LogonCount += 1;

      if (foundAccount.LastLogon < logon.Date) {
        foundAccount.LastLogon = logon.Date;
      }

      if (logon.Name && logon.Name.trim() !== "") {
        if (logon.Date > foundAccount.NameDate) {
          foundAccount.Name = logon.Name;
          foundAccount.NameDate = logon.Date;
        }
      }
    } else {
      accounts.Accounts.push({
        Id: logon.Id,
        Name: logon.Name,
        LogonCount: 1,
        LastLogon: logon.Date,
      });
    }
  });

  accounts.Accounts.sort((a, b) => a.Id - b.Id);
  accounts.Accounts.forEach((a) => delete a.NameDate);

  return accounts;
}

var accounts = {
  Accounts: [
    {
      Id: 21,
      Name: "John Shepherd",
      LogonCount: 13,
      LastLogon: new Date(2017, 1, 14, 16, 15, 6, 111),
    },
  ],
};

var logons = {
  Logons: [
    {
      Id: 21,
      Name: "John F. Shepherd",
      Date: new Date(2016, 9, 23, 11, 13, 16, 541),
    },
  ],
};

// console.log(accounts.Accounts[0].LastLogon);

console.log(updateAccounts(accounts, logons));
