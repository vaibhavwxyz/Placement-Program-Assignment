// Select DOM elements
const usernameInput = document.getElementById("username-input");
const searchBtn = document.getElementById("search-btn");
const userDetails = document.getElementById("user-details");

// Add event listener to search button
searchBtn.addEventListener("click", () => {
  // Get the entered username
  const username = usernameInput.value.trim();

  if (username === "") {
    alert("Please enter a valid Github username!");
    return;
  }

  // Fetch user data from Github API
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      // Display user data
      const html = `
                <div class="border rounded-lg p-4 mb-4">
                    <img src="${data.avatar_url}" alt="${username}'s profile picture" class="w-24 h-24 rounded-full mb-2">
                    <h2 class="text-xl font-bold mb-2">${data.name}</h2>
                    <p class="text-gray-700 mb-2">${data.bio}</p>
                    <div class="flex justify-between">
                        <div>
                            <p class="text-gray-600">Public Repositories</p>
                            <p class="text-lg font-bold">${data.public_repos}</p>
                        </div>
                        <div>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" id="followers-btn">Followers</button>
                        </div>
                    </div>
                </div>
            `;
      userDetails.innerHTML = html;

      // Add event listener to "Followers" button
      const followersBtn = document.getElementById("followers-btn");
      followersBtn.addEventListener("click", () => {
        // Fetch user's follower list from Github API
        fetch(`https://api.github.com/users/${username}/followers`)
          .then((response) => response.json())
          .then((followers) => {
            // Display follower list
            const followerList = followers
              .map(
                (follower) => `
                            <div class="flex items-center mb-2">
                                <img src="${follower.avatar_url}" alt="${follower.login}'s profile picture" class="w-10 h-10 rounded-full mr-2">
                                <a href="${follower.html_url}" target="_blank" rel="noopener noreferrer">${follower.login}</a>
                            </div>
                        `
              )
              .join("");
            const html = `
                            <div class="border rounded-lg p-4 mb-4">
                                <h2 class="text-xl font-bold mb-2">${data.name}'s Followers:</h2>
                                ${followerList}
                            </div>
                        `;
            userDetails.innerHTML = html;
          })
          .catch((error) => console.error(error));
      });
    })
    .catch((error) => console.error(error));
});
