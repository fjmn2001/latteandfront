import { describe, expect, test } from "vitest"
import { render } from "@testing-library/react"
import App from "../src/App"

describe("Testing App.tsx", () => {
  test("it should show correctly", () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
