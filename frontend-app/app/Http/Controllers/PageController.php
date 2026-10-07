<?php

namespace App\Http\Controllers;

use App\Service\StrapiService;

class PageController extends Controller
{
    public function show(StrapiService $strapi)
    {
        $page = $strapi->getPage();
        if (!$page) {
            abort(404, 'La página de inicio no está publicada en Strapi');
        }

        return view('page', ['page' => $page]);
    }
}
