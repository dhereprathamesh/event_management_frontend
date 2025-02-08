import styled from "styled-components";

export const Webcrumbs = styled.div`
  .gradiant-box {
    padding: 40px 40px 2px 40px;
    background: linear-gradient(to bottom right, #eff6ff, #f5f3ff, #fdf2f8);
  }

  .event-actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  .edit-icon {
    color: #3b82f6;
    cursor: pointer;
    font-size: 22px;
  }
  .delete-icon {
    color: red;
    cursor: pointer;
    font-size: 22px;
  }
  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .tab-button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 2rem;

    transition: transform 0.2s ease-in-out, background-color 0.2s,
      box-shadow 0.2s;
    border: none;
  }
  .tab-button.active-tab {
    background-color: #3b82f6; /* Change to your preferred active color */
    color: white;
  }
  .flex-container {
    display: flex;
    align-items: center; /* Centers items vertically */
    justify-content: space-between; /* Places items with space between */
  }
  .flex-group {
    display: flex;
    align-items: center; /* Aligns items vertically */
    gap: 1.5rem; /* 24px spacing between items */
  }
  .text-style {
    font-size: 2.25rem; /* Equivalent to Tailwind's text-4xl (36px) */
    font-weight: bold; /* Equivalent to font-bold */
    margin-bottom: 0.5rem; /* Equivalent to mb-2 (8px) */
  }
  .text-gray {
    color: #4b5563; /* Equivalent to Tailwind's text-gray-600 */
  }
  .flex-gap {
    display: flex;
    gap: 1rem; /* Equivalent to Tailwind's gap-4 (16px) */
  }
  .details-relative {
    position: relative; /* Equivalent to Tailwind's relative */
  }
  .summary-style {
    display: flex; /* Equivalent to flex */
    align-items: center; /* Centers items vertically */
    gap: 0.5rem; /* Equivalent to gap-2 (8px) */
    padding: 0.5rem 1rem; /* Equivalent to px-4 py-2 */
    border-radius: 0.5rem; /* Equivalent to rounded-lg */
    cursor: pointer; /* Equivalent to cursor-pointer */
    transition: background-color 0.3s ease; /* Equivalent to transition-colors */
  }

  .summary-style:hover {
    background-color: rgba(
      255,
      255,
      255,
      0.5
    ); /* Equivalent to hover:bg-white/50 */
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
    background-color: #f3f4f6; /* Light gray background on hover */
  }

  .hover-box.selected {
    background-color: #3b82f6; /* Blue background for selected item */
    color: white; /* White text for contrast */
    font-weight: bold;
  }
  .details-container {
    position: relative; /* Equivalent to Tailwind's relative */
  }
  .dateDropdown-menu {
    position: absolute; /* Equivalent to absolute */
    top: 100%; /* Equivalent to top-full (places it right below the parent) */
    left: 0; /* Aligns it to the left */
    margin-top: 0.5rem; /* Equivalent to mt-2 (8px spacing from the parent) */
    width: 300px; /* Equivalent to w-[300px] */
    background-color: white; /* Equivalent to bg-white */
    border-radius: 0.5rem; /* Equivalent to rounded-lg (8px) */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Equivalent to shadow-lg */
    border: 1px solid #e5e7eb; /* Equivalent to border border-gray-200 */
    padding: 1rem; /* Equivalent to p-4 (16px padding) */
    z-index: 10; /* Equivalent to z-10 */
  }
  .dropdown-box {
    padding: 10px;
  }
  .label-style {
    font-size: 0.875rem; /* Equivalent to text-sm (14px) */
    font-weight: 500; /* Equivalent to font-medium */
    margin-bottom: 0.5rem; /* Equivalent to mb-2 (8px) */
    display: block; /* Equivalent to block */
  }
  .input-style {
    width: 91%; /* Equivalent to w-full */
    padding: 0.5rem; /* Equivalent to p-2 (8px padding) */
    border-radius: 0.5rem; /* Equivalent to rounded-lg (8px) */
    border: 1px solid #e5e7eb; /* Equivalent to border-gray-200 */
    outline: none; /* Equivalent to outline-none */
    transition: box-shadow 0.2s ease-in-out;
  }

  .input-style:focus {
    box-shadow: 0 0 0 2px #3b82f6; /* Equivalent to focus:ring-2 focus:ring-blue-500 */
  }
  .btn-style {
    padding: 1rem 2rem; /* Equivalent to px-8 py-4 */
    background-color: #2563eb; /* Equivalent to bg-blue-600 */
    color: white; /* Equivalent to text-white */
    border-radius: 2rem; /* Equivalent to rounded-2xl (16px) */
    display: flex; /* Equivalent to flex */
    align-items: center; /* Equivalent to items-center */
    gap: 0.5rem; /* Equivalent to gap-2 */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* Equivalent to shadow-lg */
    transition: transform 0.2s ease-in-out, background-color 0.2s,
      box-shadow 0.2s;
    border: none;
    cursor: pointer;
  }

  .btn-style:hover {
    background-color: #1e40af; /* Equivalent to hover:bg-blue-700 */
    transform: translateY(-4px); /* Equivalent to hover:-translate-y-1 */
    box-shadow: 0 10px 25px -3px rgba(59, 130, 246, 0.3); /* Equivalent to hover:shadow-blue-200 */
  }

  .icon-style {
    font-family: "Material Symbols Outlined"; /* Ensure Material Icons work */
    font-size: 24px;
  }
  .main-container {
    padding: 14px 32px;
    background-color: #f9fafb; /* Equivalent to bg-gray-50 */
  }

  .grid-container {
    display: grid; /* Equivalent to grid */
    grid-template-columns: 1fr; /* Equivalent to grid-cols-1 */
    gap: 2rem; /* Equivalent to gap-8 (32px gap) */
  }

  /* Responsive Breakpoints */
  @media (min-width: 768px) {
    /* Equivalent to md:grid-cols-2 */
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    /* Equivalent to lg:grid-cols-3 */
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card {
    background-color: white; /* Equivalent to bg-white */
    border-radius: 1.5rem; /* Equivalent to rounded-3xl (24px) */
    padding: 2rem; /* Equivalent to p-8 (32px padding) */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Equivalent to shadow-xl */
    transition: all 0.5s ease-in-out; /* Equivalent to transition-all duration-500 */
    border: 1px solid #f3f4f6; /* Equivalent to border border-gray-100 */
  }

  .card:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15); /* Equivalent to hover:shadow-2xl */
  }

  .card-header {
    display: flex; /* Equivalent to flex */
    justify-content: space-between; /* Equivalent to justify-between */
    align-items: flex-start; /* Equivalent to items-start */
    margin-bottom: 1.5rem; /* Equivalent to mb-6 (24px) */
  }
  .badge {
    padding: 0.5rem 1rem; /* Equivalent to px-4 py-2 */
    background-color: #eff6ff; /* Equivalent to bg-blue-50 */
    color: #2563eb; /* Equivalent to text-blue-600 */
    border-radius: 9999px; /* Equivalent to rounded-full */
    font-size: 0.875rem; /* Equivalent to text-sm (14px) */
    font-weight: 600; /* Equivalent to font-semibold */
    transition: background-color 0.3s ease-in-out; /* Equivalent to transition-colors */
  }

  .group:hover .badge {
    background-color: #dbeafe; /* Equivalent to group-hover:bg-blue-100 */
  }

  .icon-container {
    display: flex; /* Equivalent to flex */
    align-items: center; /* Equivalent to items-center */
    gap: 0.5rem; /* Equivalent to gap-2 (8px) */
  }

  .icon {
    color: #10b981; /* Equivalent to text-emerald-500 */
    animation: pulse 1s infinite alternate; /* Equivalent to animate-pulse */
  }

  /* Pulse animation */
  @keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }

  .text-label {
    font-size: 0.875rem; /* Equivalent to text-sm (14px) */
    font-weight: 500; /* Equivalent to font-medium */
  }
  .heading {
    font-size: 1.5rem; /* Equivalent to text-2xl (24px) */
    font-weight: 700; /* Equivalent to font-bold */
    margin-bottom: 1rem; /* Equivalent to mb-4 (16px) */
    transition: color 0.3s ease-in-out; /* Equivalent to transition-colors */
  }

  .group:hover .heading {
    color: #2563eb; /* Equivalent to group-hover:text-blue-600 */
  }
  .icon-wrapper {
    display: flex; /* Aligns elements horizontally */
    align-items: center; /* Centers items vertically */
    gap: 12px; /* Adds spacing between items */
    color: #4b5563; /* Gray text color */
    margin-bottom: 24px; /* Adds bottom margin */
  }

  .rotating-icon {
    transition: transform 0.3s ease-in-out; /* Smooth transition */
  }

  .group:hover .rotating-icon {
    transform: rotate(12deg); /* Rotates the icon on hover */
  }
  .gradient-avatar {
    width: 40px; /* Equivalent to w-10 (40px) */
    height: 40px; /* Equivalent to h-10 (40px) */
    border-radius: 50%; /* Equivalent to rounded-full (fully rounded) */
    background: linear-gradient(
      to bottom right,
      #60a5fa,
      #2563eb
    ); /* Equivalent to bg-gradient-to-br from-blue-400 to-blue-600 */
    border: 2px solid #ffffff; /* Equivalent to border-2 border-white */
  }
  .avatar {
    width: 40px; /* Equivalent to w-10 (40px) */
    height: 40px; /* Equivalent to h-10 (40px) */
    border-radius: 50%; /* Equivalent to rounded-full */
    border: 2px solid #ffffff; /* Equivalent to border-2 border-white */
  }

  .emerald {
    background: linear-gradient(
      to bottom right,
      #34d399,
      #059669
    ); /* Equivalent to from-emerald-400 to-emerald-600 */
  }

  .violet {
    background: linear-gradient(
      to bottom right,
      #a78bfa,
      #7c3aed
    ); /* Equivalent to from-violet-400 to-violet-600 */
  }

  .gray {
    background: linear-gradient(
      to bottom right,
      #9ca3af,
      #4b5563
    ); /* Equivalent to from-gray-400 to-gray-600 */
  }

  .centered-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
  }
  .flex-group1 {
    display: flex; /* Equivalent to flex */
    align-items: center; /* Equivalent to items-center */
    gap: 8px; /* Equivalent to gap-2 (8px) */
  }
  .icon-effect {
    font-family: "Material Symbols Outlined";
    color: #3b82f6; /* Equivalent to text-blue-500 */
    transition: transform 0.2s ease-in-out; /* Equivalent to transition-transform */
  }

  .icon-effect:hover {
    transform: scale(1.1); /* Equivalent to group-hover:scale-110 */
  }

  .bold-text {
    font-weight: 600; /* Equivalent to font-semibold */
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  .join-button {
    padding: 0.6rem 1.8rem;
    background-color: #2563eb;
    color: white;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out, background-color 0.2s,
      box-shadow 0.2s;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
  }
  .ended-icon {
    color: red;
  }

  .upcoming-icon {
    color: orange;
  }
  .exit-button {
    padding: 0.6rem 1.8rem;
    background-color: rgb(222, 12, 44);
    color: white;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out, background-color 0.2s,
      box-shadow 0.2s;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
  }
  .flex-group2 {
    display: flex;
    gap: 0.2rem;
  }
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 1rem;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;
