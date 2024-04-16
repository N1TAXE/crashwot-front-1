import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import {ReactElement, ReactNode} from "react";

const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        }
    });

export function renderWithClient(ui: ReactElement) {
    const testQueryClient = createTestQueryClient();
    const { rerender, ...result } = render(
        <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
    );
    return {
        ...result,
        rerender: (rerenderUi: ReactElement) =>
            rerender(
                <QueryClientProvider client={testQueryClient}>
                    {rerenderUi}
                </QueryClientProvider>,
            ),
    };
}

export function createWrapper() {
    const testQueryClient = createTestQueryClient();
    return function ({ children }: { children: ReactNode }) {
        return (
            <QueryClientProvider client={testQueryClient}>
                {children}
            </QueryClientProvider>
        );
    };
}