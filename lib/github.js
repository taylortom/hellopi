const fetch = require('node-fetch');
const config = require('../config.json');

async function getContributions(token = config.githubToken, username = config.githubUsername) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { 'Authorization': `bearer ${token}` },
    body: JSON.stringify({
      "query": `query {
        user(login: "${username}") {
          name
          contributionsCollection {
            contributionCalendar {
              colors
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                  weekday
                }
                firstDay
              }
            }
          }
        }
      }`
    })
  });
  const json = await response.json();
  try {
    return json.data.user.contributionsCollection.contributionCalendar;
  } catch {}
}

async function getTotalContributions() {
  const data = await getContributions();
  return data.totalContributions;
}

module.exports = {
  getContributions,
  getTotalContributions
};