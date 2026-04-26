# CLAUDE.md

## Overview

This is a solution for automatically generating a pizzeria's menu from a datasource, which for the moment would be the file name ./resources/datasource_for_testing_20260425.xlsx. Our first goal is to convert the example menu (file /resources/italian_menu_example.pdf) into HTML so that it can be modified by a single page web application and then converted back to PDF for printing.

## Libraries and frameworks

The single page web application is developed using React, Vite, and Typescript as frameworks and Shadcn and Tailwind as UI libraries. It consists of a HTML copy of the PDF menu that can be navigated via the left and right arrow on the user's keyboard. Fonts used are Brolimo and Montserrat.