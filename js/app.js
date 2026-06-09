import { supabase } from "./connection.js";

const params = new URLSearchParams(window.location.search);
const postIndex = params.get("id") || 0;

console.log(supabase);
console.log(postIndex);


async function loadPosts() {
    const result = await supabase
        .from("posts")
        .select("*")
        .eq("id", postIndex)
        .single();

    console.log(result.data);

    document.querySelector("#blog-post").innerHTML = `
        <h2>${result.data.title}</h2>
        <p>${result.data.content}</p>
      `;
}

async function loadNav() {

    const { data } = await supabase
        .from("posts")
        .select("id, title")
        .order("id");


    const nav = document.querySelector("#blog-nav");

    nav.innerHTML = "";

    data.forEach(post => {
        nav.innerHTML += `
            <a href="blog.html?id=${post.id}">
                ${post.title}
            </a>
        `;
    });
}

loadNav();

loadPosts();