// src/pages/Newsfeed.jsx
import PostCard from "../components/PostCard";

export default function Newsfeed() {
  // Example posts with image URLs
  const posts = [
    {
      id: 1,
      name: "John Doe",
      description: "Exploring the world of technology!",
      image: "https://fatpossum.com/cdn/shop/collections/John_Doe_1200x1200.jpg?v=1648673542",
    },
    {
      id: 2,
      name: "Jane Smith",
      description: "A day at the beach with friends.",
      image: "https://i.pinimg.com/736x/2a/26/df/2a26df12b8fab576a93f244212cb6673.jpg",
    },
    {
      id: 3,
      name: "Chris Johnson",
      description: "Amazing sunset from last evening.",
      image: "https://images.pexels.com/photos/18844548/pexels-photo-18844548/free-photo-of-sunset-in-sky-over-lake.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      name: "Sarah Brown",
      description: "Trying out new recipes today!",
      image: "https://m.media-amazon.com/images/I/71IOm7OHNPL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 5,
      name: "Mike Williams",
      description: "Weekend hike was fantastic!",
      image: "https://img.freepik.com/free-photo/people-taking-part-sustainable-travel-movement_23-2151049528.jpg",
    },
    {
      id: 6,
      name: "Anna Taylor",
      description: "Loving this new book I started!",
      image: "https://m.media-amazon.com/images/I/71v0xAvjm0L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 7,
      name: "Tom Harris",
      description: "Check out my new car!",
      image: "https://i.ytimg.com/vi/Od-crH0q57Y/sddefault.jpg",
    },
    {
      id: 8,
      name: "Emma Wilson",
      description: "Feeling refreshed after a workout.",
      image: "https://i.pinimg.com/736x/b1/16/e8/b116e82eb0ddbce6b0dd2d2f0a30a0de.jpg",
    },
    {
      id: 9,
      name: "David Moore",
      description: "Just completed a challenging project!",
      image: "https://www.ltgdc.org.uk/wp-content/uploads/2021/05/Building-Consultancy.jpeg",
    },
    {
      id: 10,
      name: "Sophia Lee",
      description: "Exploring the city today!",
      image: "https://tripjive.com/wp-content/uploads/2024/09/Jersey-City-historic-neighborhoods-1-1024x585.jpg",
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Newsfeed</h1>
        <div className="flex flex-wrap justify-start gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
