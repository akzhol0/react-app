import { useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts.js";
import { getPageCount } from "../utilities/pages.js";
import PostService from "../API/PostService.js";
import MyModal from "../components/UI/modal/MyModal.jsx";
import PostForm from "../components/PostForm.jsx";
import PostFilter from "../components/PostFilter.jsx";
import PostList from "../components/PostList.jsx";
import MyButton from "../components/UI/button/MyButton.jsx";
import MyPagination from "../components/UI/pagination/MyPagination.jsx";
import MyLoader from "../components/UI/loader/MyLoader.jsx";
import '../styles/global.css';
import MyNavbar from "../components/UI/navbar/MyNavbar.jsx";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState("");
  let pagesArray = [];
  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }

  async function fetchPost(limitcb, pagecb) {
    try {
      const response = await PostService.getAll(limitcb, pagecb);
      setPosts(response.data);
      setIsLoaded(true);
      setTotalPages(getPageCount(response.headers["x-total-count"], limitcb));
    } catch (e) {
      setIsError(e.message);
    }
  }

  useEffect(() => {
    fetchPost(limit, page);
  }, []);

  const deletePost = (postDel) => {
    setPosts(posts.filter((post) => postDel.id !== post.id));
  };

  const createPost = (newPost) => {
    setPosts((prev) => [...prev, newPost]);
    setModal(false);
  };
  const modalActive = () => setModal(true);

  const changePage = (p) => {
    setPage(p);
    fetchPost(limit, p);
  };

  return (
    <div className="App">
      <MyNavbar/>
      <MyButton
        style={{
          marginTop: "18px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={modalActive}
      >
        Create Post
      </MyButton>
      <MyModal setModal={setModal} modal={modal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isError ? (
        <h2 style={{ marginTop: "50px", textAlign: "center" }}>{isError}</h2>
      ) : isLoaded ? (
        <PostList
          deletePost={deletePost}
          title={"First List"}
          posts={sortedAndSearchedPosts}
        />
      ) : (
        <MyLoader />
      )}
      <MyPagination changePage={changePage} page={page} array={pagesArray} />
    </div>
  );
};

export default Posts;
