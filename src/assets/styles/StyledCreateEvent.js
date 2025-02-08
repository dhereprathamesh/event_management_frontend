import styled from "styled-components";

export const Main = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ebf8ff, #f3e8ff, #fce7f3);
  padding: 3rem;

  .card-container {
    max-width: 32rem; /* Equivalent to max-w-4xl (1024px) */
    margin: 0 auto; /* Equivalent to mx-auto */
    background-color: #ffffff; /* Equivalent to bg-white */
    border-radius: 1.5rem; /* Equivalent to rounded-3xl */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Equivalent to shadow-xl */
    padding: 2.5rem; /* Equivalent to p-10 (40px) */
  }
  .content-row {
    margin-bottom: 2rem; /* Equivalent to mb-8 (32px) */
  }
  .gradient-heading {
    font-size: 1.875rem; /* Equivalent to text-3xl */
    font-weight: 700; /* Equivalent to font-bold */
    background: linear-gradient(
      to right,
      #2563eb,
      #7c3aed
    ); /* Equivalent to from-blue-600 to-violet-600 */
    -webkit-background-clip: text; /* Equivalent to bg-clip-text */
    background-clip: text;
    color: transparent; /* Equivalent to text-transparent */
  }
  .badge-draft {
    padding: 0.5rem 1rem; /* Equivalent to px-4 py-2 */
    background-color: #ebf8ff; /* Equivalent to bg-blue-50 */
    color: #2563eb; /* Equivalent to text-blue-600 */
    border-radius: 9999px; /* Equivalent to rounded-full */
    font-size: 0.875rem; /* Equivalent to text-sm */
    font-weight: 600; /* Equivalent to font-semibold */
  }
  .grid-layout {
  }
  .spaced-content > * + * {
    margin-top: 1.5rem; /* Equivalent to space-y-6 (24px) */
  }
  .label-text {
    display: block; /* Equivalent to block */
    font-size: 0.875rem; /* Equivalent to text-sm */
    font-weight: 500; /* Equivalent to font-medium */
    margin-bottom: 0.5rem; /* Equivalent to mb-2 (8px) */
  }
  .input-field {
    width: 91%; /* Equivalent to w-full */
    padding: 0.75rem; /* Equivalent to p-3 (12px) */
    border-radius: 0.75rem; /* Equivalent to rounded-xl */
    border: 1px solid #e5e7eb; /* Equivalent to border-gray-200 */
    outline: none;
    transition: box-shadow 0.2s ease-in-out;
  }
  .time-box {
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
  }

  .input-field:focus {
    box-shadow: 0 0 0 4px #3b82f6; /* Equivalent to focus:ring-2 focus:ring-blue-500 */
  }
  .textarea-field {
    width: 91%; /* Equivalent to w-full */
    padding: 0.75rem; /* Equivalent to p-3 (12px) */
    border-radius: 0.75rem; /* Equivalent to rounded-xl */
    border: 1px solid #e5e7eb; /* Equivalent to border-gray-200 */
    outline: none;
    height: 8rem; /* Equivalent to h-32 (128px) */
    resize: none; /* Equivalent to resize-none */
    transition: box-shadow 0.2s ease-in-out;
  }
  .input-box {
    margin-left: 0.9rem;
  }
  .time-input-box {
    margin-left: 0.9rem;
    width: 100%;
  }

  .textarea-field:focus {
    box-shadow: 0 0 0 4px #3b82f6; /* Equivalent to focus:ring-2 focus:ring-blue-500 */
  }
  .grid-layout {
  }
  .dashed-box {
    border: 2px dashed #e5e7eb; /* Equivalent to border-2 border-dashed border-gray-200 */
    border-radius: 0.75rem; /* Equivalent to rounded-xl */
    padding: 2rem; /* Equivalent to p-8 */
    text-align: center; /* Equivalent to text-center */
    cursor: pointer;
    transition: border-color 0.3s ease-in-out;
  }

  .dashed-box:hover {
    border-color: #3b82f6; /* Equivalent to hover:border-blue-500 */
  }

  .icon-style {
    font-size: 2.25rem; /* Equivalent to text-4xl */
    margin-bottom: 0.5rem; /* Equivalent to mb-2 */
    color: #9ca3af; /* Equivalent to text-gray-400 */
    transition: color 0.3s ease-in-out;
  }

  .dashed-box:hover .icon-style {
    color: #3b82f6; /* Equivalent to group-hover:text-blue-500 */
  }
  .upload-icon {
    font-size: 2.25rem; /* Equivalent to text-4xl */
    margin-bottom: 0.5rem; /* Equivalent to mb-2 */
    color: #9ca3af; /* Equivalent to text-gray-400 */
    transition: color 0.3s ease-in-out;
  }

  .dashed-box:hover .upload-icon {
    color: #3b82f6; /* Equivalent to group-hover:text-blue-500 */
  }
  .small-text {
    font-size: 0.875rem; /* Equivalent to text-sm */
    color: #6b7280; /* Equivalent to text-gray-500 */
  }
  .browse-text {
    color: #3b82f6; /* Equivalent to text-blue-500 */
  }
  .preview-container {
    background-color: #f9fafb; /* Equivalent to bg-gray-50 */
    border-radius: 1rem; /* Equivalent to rounded-2xl */
    padding: 2rem; /* Equivalent to p-8 */
  }

  .preview-title {
    font-size: 1.125rem; /* Equivalent to text-lg */
    font-weight: 600; /* Equivalent to font-semibold */
    margin-bottom: 1.5rem; /* Equivalent to mb-6 */
  }
  .card-container {
    background-color: white; /* Equivalent to bg-white */
    border-radius: 0.75rem; /* Equivalent to rounded-xl */
    padding: 1.5rem; /* Equivalent to p-6 */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Equivalent to shadow-lg */
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }

  .card-container:hover {
    transform: scale(1.02); /* Equivalent to hover:scale-[1.02] */
  }
  .dropwDown-options {
    padding: 0.5rem 0.75rem; /* Equivalent to px-3 (12px) and py-2 (8px) */
    cursor: pointer; /* Equivalent to cursor-pointer */
    transition: background-color 0.3s ease; /* Equivalent to transition-colors */
  }

  .card-image {
    width: 100%;
    height: 12rem; /* Equivalent to h-48 */
    background-color: #f3f4f6; /* Equivalent to bg-gray-100 */
    border-radius: 0.5rem; /* Equivalent to rounded-lg */
    margin-bottom: 1rem; /* Equivalent to mb-4 */
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error-text {
    color: red;
    padding-left: 0.2rem;
    font-size: 0.7rem;
    margin-top: 0.01rem;
  }

  .card-icon {
    font-size: 3.75rem; /* Equivalent to text-6xl */
    color: #d1d5db; /* Equivalent to text-gray-300 */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .preview-title {
    font-size: 1.25rem; /* Equivalent to text-xl */
    font-weight: bold; /* Equivalent to font-bold */
    margin-bottom: 0.5rem; /* Equivalent to mb-2 */
  }

  .preview-description {
    color: #4b5563; /* Equivalent to text-gray-600 */
    font-size: 0.875rem; /* Equivalent to text-sm */
    margin-bottom: 1rem; /* Equivalent to mb-4 */
  }
  .meta-info {
    display: flex;
    align-items: center;
    gap: 1rem; /* Equivalent to gap-4 */
    font-size: 0.875rem; /* Equivalent to text-sm */
    color: #6b7280; /* Equivalent to text-gray-500 */
  }

  .select-field {
    width: 96.5%; /* Equivalent to w-full */
    padding: 0.75rem; /* Equivalent to p-3 (12px) */
    border-radius: 0.75rem; /* Equivalent to rounded-xl */
    border: 1px solid #e5e7eb; /* Equivalent to border-gray-200 */
    outline: none;
    transition: box-shadow 0.2s ease-in-out;
    appearance: none;
    background: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='gray'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")
      no-repeat;
    background-position: right 1rem center; /* Adjust arrow position */
    background-size: 1rem;
    padding-right: 2.5rem;
  }

  .icon-text-group {
    display: flex;
    align-items: center;
    gap: 0.25rem; /* Equivalent to gap-1 */
  }

  .icon-style1 {
    color: #3b82f6; /* Equivalent to text-blue-500 */
  }
  .button-group {
    display: flex;
    justify-content: flex-end;
    gap: 1rem; /* Equivalent to gap-4 */
    margin-top: 2rem; /* Equivalent to mt-8 */
    padding-top: 2rem; /* Equivalent to pt-8 */
    border-top: 1px solid #e5e7eb; /* Equivalent to border-t */
  }

  .button-secondary {
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  .button-secondary:hover {
    background-color: #f9fafb; /* Equivalent to hover:bg-gray-50 */
  }
  .btn-primary {
    padding: 0.75rem 1.5rem; /* Equivalent to px-6 py-3 */
    background-color: #2563eb; /* Equivalent to bg-blue-600 */
    color: white;
    border-radius: 2rem; /* Equivalent to rounded-xl */
    display: flex;
    border: none;
    cursor: pointer;
    align-items: center;
    gap: 0.5rem; /* Equivalent to gap-2 */
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 6px rgba(59, 130, 246, 0.2); /* Equivalent to shadow-lg */
  }

  .btn-primary:hover {
    background-color: #1d4ed8; /* Equivalent to hover:bg-blue-700 */
    transform: translateY(-4px); /* Equivalent to hover:-translate-y-1 */
    box-shadow: 0px 6px 10px rgba(59, 130, 246, 0.3); /* Equivalent to hover:shadow-blue-200 */
  }

  .icon-rocket {
    font-family: "Material Symbols Outlined";
  }
  .dropdown-menu {
    position: absolute; /* Equivalent to absolute */
    top: 100%; /* Equivalent to top-full (positions it right below the parent) */
    left: 0; /* Aligns it to the left */
    margin-top: 0.5rem; /* Equivalent to mt-2 (8px spacing from the parent) */
    width: 200px; /* Equivalent to w-[200px] */
    background-color: white; /* Equivalent to bg-white */
    border-radius: 0.5rem; /* Equivalent to rounded-lg (8px) */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Equivalent to shadow-lg */
    border: 1px solid #e5e7eb; /* Equivalent to border border-gray-200 */
    padding: 0.5rem 0; /* Equivalent to py-2 (8px padding top & bottom) */
    z-index: 10; /* Equivalent to z-10 */
  }
  .hover-box {
    padding: 0.5rem 0.75rem; /* Equivalent to px-3 (12px) and py-2 (8px) */
    cursor: pointer; /* Equivalent to cursor-pointer */
    transition: background-color 0.3s ease; /* Equivalent to transition-colors */
  }

  .hover-box:hover {
    background-color: #f3f4f6; /* Equivalent to hover:bg-gray-100 */
  }
`;
