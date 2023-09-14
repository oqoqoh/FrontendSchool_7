import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams, useNavigate } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Link to="/"> home </Link>
            <Link to="/products/1"> / product </Link>
            <Link to="/cart"> / cart </Link>
            <Link to="/users"> / User </Link>

            {/* 라우트를 감싸줍니다. */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:id/*" element={<Outlet />}>
                    <Route path="" element={<ProductDetail />} />
                    <Route path="notice/" element={<ProductDetailNotice />} />
                </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/users/*" element={<User />}>
                    <Route path="coupon/" element={<UserCoupon />} />
                    <Route path="question/" element={<UserQuestion />} />
                    <Route path="notice/" element={<UserNotice />} />
                </Route>
            </Routes>
            <Button />
        </BrowserRouter>
    );
}
function Button() {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => {
                return navigate('/users');
            }}>
            go to User
        </button>
    );
}

function HomePage() {
    return <h1>HomePage</h1>;
}
function Cart() {
    return <h1>Cart</h1>;
}
function User() {
    return (
        <div>
            <h1>User</h1>
            <Outlet />
        </div>
    );
}
function UserCoupon() {
    return <h1>UserCoupon</h1>;
}
function UserQuestion() {
    return <h1>UserQuestion</h1>;
}
function UserNotice() {
    return <h1>UserNotice</h1>;
}

function ProductDetail() {
    const { id } = useParams();
    return <h1>ProductDetai -{id}</h1>;
}

function ProductDetailNotice() {
    const { id } = useParams();
    return <h1>ProductDetail -{id} Notice</h1>;
}

export default App;
