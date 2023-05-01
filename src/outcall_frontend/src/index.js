import { outcall_backend } from "../../declarations/outcall_backend";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const post_code = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const address = await outcall_backend.find_address(post_code);

  button.removeAttribute("disabled");

  const addressJson = JSON.parse(new TextDecoder('utf-8').decode(new Uint8Array(address.body)));
  const result = addressJson.results[0];
  const combinedAddress = `${result.address1} ${result.address2} ${result.address3}`;

  document.getElementById("greeting").innerText = combinedAddress;

  return false;
});
