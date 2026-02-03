function UserProfile({ userId }) {
const [user, setUser] = useState(null);
// PROBLEM: This function is recreated on every render
const fetchUser = useCallBack(async () => {
const res = await fetch(`/api/users/${userId}`);
setUser(await res.json());
},[userId]);
useEffect(() => {
fetchUser();
}, [fetchUser]); // ESLint demands fetchUser be here
return <div>{user?.name}</div>;
}
//done