type Icon = {
  name:
    | 'calendar'
    | 'success'
    | 'warning'
    | 'danger'
    | 'globe'
    | 'play'
    | 'plus'
    | 'recycle'
    | 'satellite'
    | 'sparkle'
    | 'user'
    | 'xMark'
    | 'secondary'
    | 'question'
    | 'userId';
  fill?: string;
};

const icons = {
  calendar: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        d="M12 2h1.5A1.5 1.5 0 0115 3.5v10a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 13.5v-10A1.5 1.5 0 011.5 2H3V0h1v2h7V0h1v2z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  success: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm7.072 3.21l4.318-5.398-.78-.624-3.682 4.601L4.32 7.116l-.64.768 3.392 2.827z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  warning: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM4 8h7V7H4v1z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  secondary: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM4 8h7V7H4v1z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  danger: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM7 8V4h1v4H7zm1 2v1.01H7V10h1z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  globe: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM1.197 5.904A6.503 6.503 0 006 13.826v-.619l-1-1v-1.5l-1-1V8.5a.5.5 0 01.5-.5h4A1.5 1.5 0 0110 9.5v.512c.51.073.915.477.988.988h1.99A6.502 6.502 0 0010 1.498V2.5A1.5 1.5 0 018.5 4h-1a.5.5 0 00-.5.5A1.5 1.5 0 015.5 6H5v.707l-.44.44a1.5 1.5 0 01-2.12 0L1.196 5.903z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  play: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        d="M4.79 2.093A.5.5 0 004 2.5v10a.5.5 0 00.79.407l7-5a.5.5 0 000-.814l-7-5z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  plus: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM7 11V8H4V7h3V4h1v3h3v1H8v3H7z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  recycle: (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.83596 0.701914C3.08909 0.301913 3.53128 0.062851 4.00003 0.062851C4.46878 0.062851 4.91096 0.301913 5.16409 0.701914L6.13753 2.23473L6.24065 1.73785C6.28284 1.53473 6.48128 1.40504 6.68284 1.44566C6.8844 1.48629 7.01565 1.68629 6.97503 1.88785L6.6719 3.36285C6.65003 3.46754 6.5844 3.55816 6.49221 3.61129C6.40003 3.66441 6.28753 3.67691 6.18596 3.64254L4.75784 3.16754C4.56096 3.10191 4.45471 2.88941 4.52034 2.6941C4.58596 2.49879 4.79846 2.39098 4.99378 2.4566L5.4969 2.62379L4.53128 1.10348C4.41721 0.923789 4.21565 0.812851 4.00003 0.812851C3.7844 0.812851 3.58284 0.923789 3.46878 1.10348L3.13284 1.63316C3.02346 1.80504 2.79846 1.85816 2.62346 1.75348C2.44221 1.64566 2.38753 1.40973 2.50003 1.2316L2.83596 0.701914ZM6.8594 4.05504C7.0344 3.95035 7.2594 4.00348 7.36878 4.17535L7.78753 4.83473C7.92503 5.05191 7.99846 5.30348 8.00003 5.55973C8.00471 6.3191 7.39065 6.93785 6.63128 6.93785H4.48753L4.87503 7.2816C5.02971 7.4191 5.04378 7.6566 4.90628 7.81129C4.76878 7.96598 4.53128 7.98004 4.37659 7.84254L3.25159 6.84254C3.1719 6.77066 3.12503 6.6691 3.12503 6.56285C3.12503 6.4566 3.17034 6.35348 3.25159 6.28316L4.37659 5.28316C4.53128 5.14566 4.76878 5.15973 4.90628 5.31441C5.04378 5.4691 5.02971 5.7066 4.87503 5.8441L4.48596 6.18785H6.63128C6.97503 6.18785 7.25315 5.90816 7.25003 5.56441C7.25003 5.44879 7.21565 5.33473 7.15315 5.23629L6.7344 4.57691C6.6219 4.39879 6.67815 4.16285 6.85784 4.05504H6.8594ZM1.99065 4.11285L1.88596 3.60035L0.846902 5.23629C0.784402 5.33473 0.751589 5.44879 0.750027 5.56441C0.748464 5.90816 1.02659 6.18785 1.36878 6.18785H2.12503C2.33284 6.18785 2.50003 6.35504 2.50003 6.56285C2.50003 6.77066 2.33284 6.93785 2.12503 6.93785H1.36878C0.609402 6.93785 -0.00466084 6.32066 2.66593e-05 5.56129C0.00158916 5.30504 0.0750267 5.05348 0.212527 4.83629L1.23128 3.2316L0.743777 3.39254C0.546902 3.45816 0.334402 3.35191 0.270339 3.15504C0.206277 2.95816 0.310964 2.74566 0.507839 2.6816L1.93596 2.2066C2.03753 2.17223 2.14846 2.18473 2.24221 2.23785C2.33596 2.29098 2.40003 2.3816 2.4219 2.48629L2.72503 3.96129C2.76721 4.16441 2.63596 4.36285 2.43284 4.40348C2.22971 4.4441 2.03128 4.31441 1.99065 4.11129V4.11285Z"
        fill="#FF7103"
      />
    </svg>
  ),
  satellite: (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.11408 3.00084C9.11408 2.3855 8.61525 1.88667 7.99991 1.88667C7.38457 1.88667 6.88574 2.3855 6.88574 3.00084V8.01167C6.88574 8.62701 7.38457 9.12584 7.99991 9.12584C8.61525 9.12584 9.11408 8.62701 9.11408 8.01167V3.00084Z"
        fill="#8D8D93"
        stroke="#8D8D93"
        stroke-miterlimit="10"
      />
      <path
        d="M4.1575 3.56084H2.375C2.09886 3.56084 1.875 3.78469 1.875 4.06084V7.5175C1.875 7.79365 2.09886 8.0175 2.375 8.0175H4.1575C4.43364 8.0175 4.6575 7.79365 4.6575 7.5175V4.06084C4.6575 3.78469 4.43364 3.56084 4.1575 3.56084Z"
        fill="#8D8D93"
        stroke="#8D8D93"
        stroke-miterlimit="10"
      />
      <path
        d="M13.625 3.56084H11.8425C11.5664 3.56084 11.3425 3.78469 11.3425 4.06084V7.5175C11.3425 7.79365 11.5664 8.0175 11.8425 8.0175H13.625C13.9012 8.0175 14.125 7.79365 14.125 7.5175V4.06084C14.125 3.78469 13.9012 3.56084 13.625 3.56084Z"
        fill="#8D8D93"
        stroke="#8D8D93"
        stroke-miterlimit="10"
      />
      <path
        d="M5 6L7 6"
        stroke="#8D8D93"
        stroke-miterlimit="10"
      />
      <path
        d="M11 6H9"
        stroke="#8D8D93"
        stroke-miterlimit="10"
      />
      <path
        d="M8 10.8V9.12584"
        stroke="#8D8D93"
        stroke-miterlimit="10"
      />
      <path
        d="M8.00006 10.8C8.59105 10.8 9.15784 11.0348 9.57573 11.4527C9.99363 11.8706 10.2284 12.4373 10.2284 13.0283H5.77173C5.77173 12.4373 6.0065 11.8706 6.42439 11.4527C6.84229 11.0348 7.40907 10.8 8.00006 10.8Z"
        fill="#8D8D93"
        stroke="#8D8D93"
        stroke-miterlimit="10"
      />
      <path
        d="M8 14.6967V13.0225"
        stroke="#8D8D93"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  ),
  sparkle: (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.53363 1.32722C7.56843 1.23134 7.63191 1.14849 7.71543 1.08995C7.79896 1.03141 7.89849 1 8.0005 1C8.1025 1 8.20203 1.03141 8.28556 1.08995C8.36909 1.14849 8.43257 1.23134 8.46737 1.32722L8.94219 2.62453C9.3141 3.6418 9.90358 4.56564 10.6695 5.33153C11.4354 6.09742 12.3592 6.6869 13.3765 7.05881L14.6728 7.53363C14.7687 7.56843 14.8515 7.63191 14.9101 7.71543C14.9686 7.79896 15 7.89849 15 8.0005C15 8.1025 14.9686 8.20203 14.9101 8.28556C14.8515 8.36909 14.7687 8.43257 14.6728 8.46737L13.3765 8.94219C12.3592 9.3141 11.4354 9.90358 10.6695 10.6695C9.90358 11.4354 9.3141 12.3592 8.94219 13.3765L8.46737 14.6728C8.43257 14.7687 8.36909 14.8515 8.28556 14.9101C8.20203 14.9686 8.1025 15 8.0005 15C7.89849 15 7.79896 14.9686 7.71543 14.9101C7.63191 14.8515 7.56843 14.7687 7.53363 14.6728L7.05881 13.3765C6.6869 12.3592 6.09742 11.4354 5.33153 10.6695C4.56564 9.90358 3.6418 9.3141 2.62453 8.94219L1.32722 8.46737C1.23134 8.43257 1.14849 8.36909 1.08995 8.28556C1.03141 8.20203 1 8.1025 1 8.0005C1 7.89849 1.03141 7.79896 1.08995 7.71543C1.14849 7.63191 1.23134 7.56843 1.32722 7.53363L2.62453 7.05881C3.6418 6.6869 4.56564 6.09742 5.33153 5.33153C6.09742 4.56564 6.6869 3.6418 7.05881 2.62453L7.53363 1.32722Z"
        fill="#8D8D93"
      />
    </svg>
  ),
  user: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        d="M7.5 0a3.499 3.499 0 100 6.996A3.499 3.499 0 107.5 0zm-2 8.994a3.5 3.5 0 00-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 00-3.5-3.5h-4z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  xMark: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm10.146 3.354L7.5 8.207l-2.646 2.647-.708-.707L6.793 7.5 4.146 4.854l.708-.708L7.5 6.793l2.646-2.647.708.708L8.207 7.5l2.647 2.646-.707.708z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  userId: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 3.5A1.5 1.5 0 011.5 2h12A1.5 1.5 0 0115 3.5v8a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 11.5v-8zM3 6a2 2 0 114 0 2 2 0 01-4 0zm9 0H9V5h3v1zm0 3H9V8h3v1zM5 9a2.927 2.927 0 00-2.618 1.618l-.33.658A.5.5 0 002.5 12h5a.5.5 0 00.447-.724l-.329-.658A2.927 2.927 0 005 9z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  question: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM5.5 6a2 2 0 012-2h.6c1.05 0 1.9.85 1.9 1.9V6a2 2 0 01-2 2v1H7V7h1a1 1 0 001-1v-.1a.9.9 0 00-.9-.9h-.6a1 1 0 00-1 1h-1zM7 11v-1h1v1H7z"
        fill="currentColor"
      ></path>
    </svg>
  )
};

const Icon = ({ name, fill = 'primary' }: Icon) => {
  return <span className={`w-4 h-4 grid place-items-center fill-${fill}`}>{icons[name]}</span>;
};

export default Icon;
