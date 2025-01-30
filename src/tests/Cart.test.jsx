import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Cart from "../components/Cart/Cart";

// Mock fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, image: "test.jpg", description: "Test Product" },
      ]),
  })
);

describe("Cart flow", () => {
  it("adds item to cart and shows in cart page", async () => {
    const mockBasket = [];
    const setBasket = vi.fn();

    // Render Home
    render(
      <BrowserRouter>
        <Home basket={mockBasket} setBasket={setBasket} />
      </BrowserRouter>
    );

    // Wait for products to load
    await waitFor(() => {
      expect(screen.getByText("description")).toBeInTheDocument();
    });

    // Add to cart
    const addButton = screen.getByRole("button", { name: "+" });
    await userEvent.click(addButton);

    // Verify setBasket was called with correct item
    expect(setBasket).toHaveBeenCalledWith([
      { id: 1, image: "test.jpg", description: "Test Product" },
    ]);
  });
});

describe("Cart", () => {
  it("displays added items", () => {
    const mockBasket = [
      { id: 1, image: "test.jpg", description: "Test Product" },
      { id: 1, image: "test.jpg", description: "Test Product" }, // Added twice to test quantity
    ];

    render(
      <BrowserRouter>
        <Cart basket={mockBasket} />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("heading", { level: 2, name: "2" })
    ).toBeInTheDocument();
  });
});
